<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;fimasartan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fimasartan_Kim2014v2_estimate&quot;,&quot;label&quot;:&quot;Kim_2014_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# fimasartan

- **generic name:** fimasartan
- **ATC codes:** `C09CA10`, `C09DA10`, `C09DB09`, `C10BX16`
- **DrugBank:** [DB09279](https://go.drugbank.com/drugs/DB09279) · **PubChem:** [CID 9870652](https://pubchem.ncbi.nlm.nih.gov/compound/9870652)
- **molar mass:** 501.65 g/mol (C27H31N7OS) — DrugBank
- **groups:** investigational

## About

Fimasartan is an angiotensin II receptor blocker developed for the treatment of high blood pressure (essential hypertension). It is considered investigational in major drug databases and is not authorised in the European Union; it is used mainly in a few Asian countries such as South Korea.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q8563179](https://www.wikidata.org/wiki/Q8563179) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fimasartan | parent | 501.65 | C27H31N7OS | DrugBank | [9870652](https://pubchem.ncbi.nlm.nih.gov/compound/9870652) | Kim_2014_2, Kim_2015, Kim_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:32 | 4:27 | 1/4/2 | 2/0/0 | 0/0/0 | 128,070/25,807 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2014_2_estimate](drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate.md) | ▶ model + simulator | 2-compartment, oral | 5 | Kim S et al., Effect of renal function on the pharmac…, Drug design, development an… (2014) | [10.2147/DDDT.S68784](https://doi.org/10.2147/DDDT.S68784) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.357). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.00).">human + animal</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Kim_2015_reference](drugs/drug_fimasartan/Fimasartan_Kim2015_reference.md) | — | 2-compartment (no model) | 4 | Kim TH et al., Population Pharmacokinetic Modeling of…, The AAPS journal (2015) | [10.1208/s12248-015-9764-2](https://doi.org/10.1208/s12248-015-9764-2) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kim_2017_reference](drugs/drug_fimasartan/Fimasartan_Kim2017_reference.md) | — | 1-compartment (no model) | 8 | Kim CO et al., Decreased potency of fimasartan in live…, Translational and clinical… (2017) | [10.12793/tcp.2017.25.1.43](https://doi.org/10.12793/tcp.2017.25.1.43) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kim_2014_2_healthy_volunteers](drugs/drug_fimasartan/Fimasartan_Kim2014v2_healthy_volunteers.md) | — | 1-compartment (no model) | 5 | Kim S et al., Effect of renal function on the pharmac…, Drug design, development an… (2014) | [10.2147/DDDT.S68784](https://doi.org/10.2147/DDDT.S68784) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kim_2014_2_p_value](drugs/drug_fimasartan/Fimasartan_Kim2014v2_p_value.md) | — | 1-compartment (no model) | 0 | Kim S et al., Effect of renal function on the pharmac…, Drug design, development an… (2014) | [10.2147/DDDT.S68784](https://doi.org/10.2147/DDDT.S68784) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kim_2014_2_ri_patients](drugs/drug_fimasartan/Fimasartan_Kim2014v2_ri_patients.md) | — | 1-compartment (no model) | 3 | Kim S et al., Effect of renal function on the pharmac…, Drug design, development an… (2014) | [10.2147/DDDT.S68784](https://doi.org/10.2147/DDDT.S68784) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.6). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lee_2013_2_reference](drugs/drug_fimasartan/Fimasartan_Lee2013v2_reference.md) | — | 1-compartment (no model) | 0 | Lee H et al., A Population Pharmacokinetic Analysis o…, Clinical pharmacology in dr… (2013) | [10.1002/cpdd.10](https://doi.org/10.1002/cpdd.10) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Bulitta_2017_DBP](drugs/drug_fimasartan/pd_Bulitta_2017_DBP.md) | diastolic blood pressure biomarker turnover ← fimasartan | — | Bulitta JB et al., Characterizing the time-course of antih…, European journal of pharmac… (2017) | [10.1016/j.ejps.2017.06.008](https://doi.org/10.1016/j.ejps.2017.06.008) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Bulitta_2017_SBP](drugs/drug_fimasartan/pd_Bulitta_2017_SBP.md) | systolic blood pressure biomarker turnover ← fimasartan | — | Bulitta JB et al., Characterizing the time-course of antih…, European journal of pharmac… (2017) | [10.1016/j.ejps.2017.06.008](https://doi.org/10.1016/j.ejps.2017.06.008) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Kim_2017_DBP](drugs/drug_fimasartan/pd_Kim_2017_DBP.md) | Diastolic blood pressure ← fimasartan · indirect response — drug inhibits the production of Diastolic blood pressure | model (no simulator) | Kim CO et al., Decreased potency of fimasartan in live…, Translational and clinical… (2017) | [10.12793/tcp.2017.25.1.43](https://doi.org/10.12793/tcp.2017.25.1.43) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Kim_2017_SBP](drugs/drug_fimasartan/pd_Kim_2017_SBP.md) | Systolic blood pressure ← fimasartan · indirect response — drug inhibits the production of Systolic blood pressure | model (no simulator) | Kim CO et al., Decreased potency of fimasartan in live…, Translational and clinical… (2017) | [10.12793/tcp.2017.25.1.43](https://doi.org/10.12793/tcp.2017.25.1.43) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fimasartan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `SLCO1B1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AGTR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 7  ·  extracted 1  ·  needs_review 2  ·  rejected 4  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2013.pdf` | Lee J et al., Pharmacokinetic-pharmacodynamic model o…, European journal of clinica… (2013) | popPK | 10 | [10.1007/s00228-012-1297-3](https://doi.org/10.1007/s00228-012-1297-3) | [22660441](https://pubmed.ncbi.nlm.nih.gov/22660441) | The paper describes a population PK/PD study of fimasartan, but the specific numeric parameter values are not provided in the evidence text, only qualitative model descriptions and bioavailability changes. |
| `Lee_2013_2.pdf` | Lee H et al., A Population Pharmacokinetic Analysis o…, Clinical pharmacology in dr… (2013) | popPK | 10 | [10.1002/cpdd.10](https://doi.org/10.1002/cpdd.10) | [27121670](https://pubmed.ncbi.nlm.nih.gov/27121670) | The abstract explicitly reports quantitative population PK parameters (apparent clearance) with confidence intervals for fimasartan in humans. |
| `Jeong_2015.pdf` | Jeong ES et al., Glucuronidation of fimasartan, a new an…, Xenobiotica; the fate of fo… (2015) | pgx | 7 | [10.3109/00498254.2014.942810](https://doi.org/10.3109/00498254.2014.942810) | [25034008](https://www.ncbi.nlm.nih.gov/pubmed/25034008) | metadata signals extractable PGX data (UGT1A3, PK/PD-context) |

<sub>queue written 2026-10-07T15:28:22.843973+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angeli_2018 | irrelevant | 1 | 1 | This is a review article that provides general pharmacokinetic descriptions (bioavailability, metabolism) but lacks original quantitative compartmental PK parameters (CL, Vd, ka) for fimasartan. |
| PD | Angeli_2018 | not_relevant | 2 | 0 | This review qualitatively mentions blood-pressure reduction and effective doses, but reports no extractable exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Bulitta_2017 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic (blood pressure) response and dose selection, reporting PD parameters (EMax, EC50) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for fimasartan. |
| PGx | Choi_2018 | not_relevant | 2 | 5 | The study characterizes enzyme involvement in fimasartan metabolism using recombinant proteins and inhibitors, but does not report pharmacogenomic effects of specific human genetic variants (genotypes) on PK or PD parameters. |
| PGx | Jeong_2015 | not_relevant | 0 | 0 | The paper characterizes the enzyme (UGT1A3) responsible for fimasartan glucuronidation but does not report the effect of specific gene variants or genotypes on pharmacokinetic parameters. |
| popPK | Lee_2013 | relevant | 10 | 0 | The paper describes a population PK/PD study of fimasartan, but the specific numeric parameter values are not provided in the evidence text, only qualitative model descriptions and bioavailability changes. |
| PD | Lee_2013 | not_relevant | 8 | 0 | A formal population turnover PK-PD model is described, but the text provides no numeric PD parameter estimates or effect-versus-concentration data to extract. |
| PGx | Ryu_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (Perillyl Alcohol) and its effect on fimasartan CYP3A4 metabolism, but does not investigate the effect of a specific gene variant or genotype on the drug's PK/PD parameters. |
| PGx | Storelli_2024 | not_relevant | 0 | 0 | The paper focuses on the effect of hepatic impairment on fimasartan PK, not on pharmacogenomic effects of gene variants. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:28 UTC</sub>
