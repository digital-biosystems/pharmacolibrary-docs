<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;tiagabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tiagabine_Ingwersen2000_reference&quot;,&quot;label&quot;:&quot;Ingwersen_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tiagabine/Tiagabine_Ingwersen2000_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tiagabine

- **generic name:** tiagabine
- **ATC codes:** `N03AG06`
- **DrugBank:** [DB00906](https://go.drugbank.com/drugs/DB00906) · **PubChem:** [CID 60648](https://pubchem.ncbi.nlm.nih.gov/compound/60648)
- **molar mass:** 375.548 g/mol (C20H25NO2S2) — DrugBank
- **groups:** approved, investigational

## About

Tiagabine is an anticonvulsant used to treat focal epilepsy and has also been studied for bipolar disorder. It is an approved medicine, though not authorised in the European Union, and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q907219](https://www.wikidata.org/wiki/Q907219) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tiagabine | parent | 375.548 | C20H25NO2S2 | DrugBank | [60648](https://pubchem.ncbi.nlm.nih.gov/compound/60648) | Ingwersen_2000, Samara_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:53 | 1:35 | 1/1/1 | 3/0/2 | 0/0/0 | 107,360/8,843 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ingwersen_2000_reference](drugs/drug_tiagabine/Tiagabine_Ingwersen2000_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Ingwersen SH et al., Population pharmacokinetics of tiagabin…, European journal of pharmac… (2000) | [10.1016/s0928-0987(00)00109-3](https://doi.org/10.1016/s0928-0987(00)00109-3) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Samara_1998_reference](drugs/drug_tiagabine/Tiagabine_Samara1998_reference.md) | — | 1-compartment (no model) | 1 | Samara EE et al., Population analysis of the pharmacokine…, Epilepsia (1998) | [10.1111/j.1528-1157.1998.tb01182.x](https://doi.org/10.1111/j.1528-1157.1998.tb01182.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cleton_1999_2_reference](drugs/drug_tiagabine/Tiagabine_Cleton1999v2_reference.md) | — | 1-compartment (no model) | 0 | Cleton A et al., Stereoselective central nervous system…, British journal of pharmaco… (1999) | [10.1038/sj.bjp.0702962](https://doi.org/10.1038/sj.bjp.0702962) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Cleton_1999_beta](drugs/drug_tiagabine/pd_Cleton_1999_beta.md) | amplitude of the EEG 11.5-30 Hz frequency band (beta) ← tiagabine · direct sigmoid Emax (Hill) effect | — | Cleton A et al., Application of a combined "effect compa…, Journal of pharmacokinetics… (1999) | [10.1023/a:1020999114109](https://doi.org/10.1023/a:1020999114109) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Cleton_1999_2_3_H_GABA_upt](drugs/drug_tiagabine/pd_Cleton_1999_2_3_H_GABA_upt.md) | Inhibition of [ 3 H]-GABA uptake ← tiagabine · direct sigmoid Emax (Hill) effect | — | Cleton A et al., Stereoselective central nervous system…, British journal of pharmaco… (1999) | [10.1038/sj.bjp.0702962](https://doi.org/10.1038/sj.bjp.0702962) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Cleton_1999_2_EEG](drugs/drug_tiagabine/pd_Cleton_1999_2_EEG.md) | increase in the b activity of the EEG ← tiagabine · direct sigmoid Emax (Hill) effect | — | Cleton A et al., Stereoselective central nervous system…, British journal of pharmaco… (1999) | [10.1038/sj.bjp.0702962](https://doi.org/10.1038/sj.bjp.0702962) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Cleton_2000_EEG](drugs/drug_tiagabine/pd_Cleton_2000_EEG.md) | amplitude of the 11.5-30 Hz frequency band of the EEG ← tiagabine · delayed effect through an effect compartment | — | Cleton A et al., Effect of amygdala kindling on the cent…, British journal of pharmaco… (2000) | [10.1038/sj.bjp.0703417](https://doi.org/10.1038/sj.bjp.0703417) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Cleton_2000_GABA](drugs/drug_tiagabine/pd_Cleton_2000_GABA.md) | extracellular GABA concentration ← tiagabine · delayed effect through an effect compartment | — | Cleton A et al., Effect of amygdala kindling on the cent…, British journal of pharmaco… (2000) | [10.1038/sj.bjp.0703417](https://doi.org/10.1038/sj.bjp.0703417) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Cleton_2000_2_EEG_beta_activity](drugs/drug_tiagabine/pd_Cleton_2000_2_EEG_beta_activity.md) | increase in beta activity (11.5-30 Hz) of the EEG ← tiagabine · direct sigmoid Emax (Hill) effect | model (no simulator) | Cleton A et al., Pharmacokinetic-pharmacodynamic modelli…, European journal of pharmac… (2000) | [10.1016/s0928-0987(00)00179-2](https://doi.org/10.1016/s0928-0987(00)00179-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Jonker_2003_2_EEG](drugs/drug_tiagabine/pd_Jonker_2003_2_EEG.md) | EEG response in the 11.5- to 30-Hz frequency band ← tiagabine · direct sigmoid Emax (Hill) effect | model (no simulator) | Jonker DM et al., Pharmacodynamic analysis of the interac…, Epilepsia (2003) | [10.1046/j.1528-1157.2003.37802.x](https://doi.org/10.1046/j.1528-1157.2003.37802.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tiagabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SLC6A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cleton_1999.pdf` | Cleton A et al., Application of a combined "effect compa…, Journal of pharmacokinetics… (1999) | popPK | 10 | [10.1023/a:1020999114109](https://doi.org/10.1023/a:1020999114109) | [10728492](https://pubmed.ncbi.nlm.nih.gov/10728492) | The study reports explicit quantitative PK parameters (clearance, volume of distribution, half-life) for tiagabine in rats. |
| `Ingwersen_2000.pdf` | Ingwersen SH et al., Population pharmacokinetics of tiagabin…, European journal of pharmac… (2000) | popPK | 10 | [10.1016/s0928-0987(00)00109-3](https://doi.org/10.1016/s0928-0987(00)00109-3) | [11042231](https://pubmed.ncbi.nlm.nih.gov/11042231) | The paper reports a population PK model for tiagabine with explicit numeric values for CL/f, V/f, ka, and half-life in the text. |
| `Samara_1998.pdf` | Samara EE et al., Population analysis of the pharmacokine…, Epilepsia (1998) | popPK | 10 | [10.1111/j.1528-1157.1998.tb01182.x](https://doi.org/10.1111/j.1528-1157.1998.tb01182.x) | [9701378](https://pubmed.ncbi.nlm.nih.gov/9701378) | The abstract explicitly reports quantitative central clearance values (21.4 L/h and 12.8 L/h) for tiagabine in a population pharmacokinetic study. |
| `Bockbrader_2011.pdf` | Bockbrader HN et al., Pregabalin effect on steady-state pharm…, Epilepsia (2011) | popPK | 7 | [10.1111/j.1528-1167.2010.02763.x](https://doi.org/10.1111/j.1528-1167.2010.02763.x) | [21314678](https://pubmed.ncbi.nlm.nih.gov/21314678) | The study reports a relative change in tiagabine clearance (+34.9%) but lacks the absolute quantitative parameter values (CL, V) required for full extraction. |
| `Cleton_2000_2.pdf` | Cleton A et al., Pharmacokinetic-pharmacodynamic modelli…, European journal of pharmac… (2000) | popPK | 6 | [10.1016/s0928-0987(00)00179-2](https://doi.org/10.1016/s0928-0987(00)00179-2) | [11102742](https://pubmed.ncbi.nlm.nih.gov/11102742) | The study describes the PK model (bi-exponential) and reports PD parameters (EC50, k_e0) but does not list specific numeric values for PK parameters like clearance (CL), volume (V), or rate constants (k10, k01, k12) in the text. |
| `Jonker_2003_2.pdf` | Jonker DM et al., Pharmacodynamic analysis of the interac…, Epilepsia (2003) | popPK | 6 | [10.1046/j.1528-1157.2003.37802.x](https://doi.org/10.1046/j.1528-1157.2003.37802.x) | [12614388](https://pubmed.ncbi.nlm.nih.gov/12614388) | The study reports a quantitative change in tiagabine clearance (89 ml/min/kg) in rats, but the primary focus is pharmacodynamic interaction and PK parameters are secondary. |

<sub>queue written 2026-10-07T07:52:20.191008+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bockbrader_2011 | relevant | 7 | 2 | The study reports a relative change in tiagabine clearance (+34.9%) but lacks the absolute quantitative parameter values (CL, V) required for full extraction. |
| popPK | Clark_1994 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on GAT-3 transporter expression and kinetics, not a pharmacokinetic study of tiagabine disposition. |
| popPK | Cleton_2000 | irrelevant | 3 | 0 | The study is primarily a pharmacodynamic investigation in rats (EEG and GABA levels) that lacks quantitative disposition parameters (CL, V, ka) or a population-PK model in the provided evidence. |
| popPK | Cleton_2000_2 | irrelevant | 6 | 1 | The study describes the PK model (bi-exponential) and reports PD parameters (EC50, k_e0) but does not list specific numeric values for PK parameters like clearance (CL), volume (V), or rate constants (k10, k01, k12) in the text. |
| popPK | Devenish_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of zonisamide's modulation of glycine receptors, and tiagabine is only mentioned as a co-tested comparator with no pharmacokinetic data reported. |
| popPK | Gravel_2025 | irrelevant | 1 | 2 | The study focuses on the pharmacokinetics of novel PET radiotracers in nonhuman primates, with tiagabine serving only as a blocking agent; the mention of human tiagabine parameters (Cmax, t1/2) is a citation of literature for comparison, not original data from this study. |
| popPK | Jonker_2003 | irrelevant | 4 | 0 | The study focuses on pharmacodynamic modeling of seizure suppression and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for tiagabine. |
| popPK | Sitte_2002 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of GABA transporter function where tiagabine is used only as a reuptake inhibitor/comparator, not a pharmacokinetic subject. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:52 UTC</sub>
