<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;clomipramine&quot;}]"></div>

# clomipramine

- **generic name:** clomipramine
- **ATC codes:** `N06AA04`
- **DrugBank:** [DB01242](https://go.drugbank.com/drugs/DB01242) · **PubChem:** [CID 2801](https://pubchem.ncbi.nlm.nih.gov/compound/2801)
- **molar mass:** 314.852 g/mol (C19H23ClN2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Clomipramine is a tricyclic antidepressant used to treat obsessive-compulsive disorder, panic disorder, neurotic disorders and pain. It is an approved human medicine, is also approved for veterinary use, and is included on the WHO essential medicines list, so it remains widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q58713](https://www.wikidata.org/wiki/Q58713) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clomipramine | parent | 314.852 | C19H23ClN2 | DrugBank | [2801](https://pubchem.ncbi.nlm.nih.gov/compound/2801) | Nielsen-Kudsk_1980 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:17 | 1:10 | 0/3/1 | 7/0/0 | 0/0/0 | 68,147/5,653 | ollama / glm-5.3-flash | 2 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.267). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17, Q22, Q88 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Lainesse_2006_reference](drugs/drug_clomipramine/Clomipramine_Lainesse2006_reference.md) | — | 1-compartment (no model) | 9 | Lainesse C et al., Pharmacokinetics of clomipramine and de…, Journal of veterinary pharm… (2006) | [10.1111/j.1365-2885.2006.00742.x](https://doi.org/10.1111/j.1365-2885.2006.00742.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gex-Fabry_2000_reference](drugs/drug_clomipramine/Clomipramine_GexFabry2000_reference.md) | — | general linear (no model) | 0 | Gex-Fabry M et al., Population pharmacokinetics of clomipra…, Therapeutic drug monitoring (2000) | [10.1097/00007691-200012000-00009](https://doi.org/10.1097/00007691-200012000-00009) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kurata_1986_reference](drugs/drug_clomipramine/Clomipramine_Kurata1986_reference.md) | — | 1-compartment (no model) | 0 | Kurata K et al., A pharmacokinetic study of clomipramine…, The Japanese journal of psy… (1986) | [10.1111/j.1440-1819.1986.tb03178.x](https://doi.org/10.1111/j.1440-1819.1986.tb03178.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Nielsen-Kudsk_1980_reference](drugs/drug_clomipramine/Clomipramine_NielsenKudsk1980_reference.md) | — | 1-compartment (no model) | 3 | Nielsen-Kudsk F et al., Myocardial pharmacokinetics of amitript…, Acta pharmacologica et toxi… (1980) | [10.1111/j.1600-0773.1980.tb02445.x](https://doi.org/10.1111/j.1600-0773.1980.tb02445.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Apparsundaram_2008_inhibition_of_3_H_DASB_and_3_H_S_citalopram_binding_to_SERT](drugs/drug_clomipramine/pd_Apparsundaram_2008_inhibition_of_3_H_DASB_and_3_H_S_citalopr.md) | inhibition of [(3)H]DASB and [(3)H]S-citalopram binding to SERT ← clomipramine · inhibition effect | — | Apparsundaram S et al., Antidepressants targeting the serotonin…, The Journal of pharmacology… (2008) | [10.1124/jpet.108.142315](https://doi.org/10.1124/jpet.108.142315) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Castaing_2000_dye_leakage](drugs/drug_clomipramine/pd_Castaing_2000_dye_leakage.md) | Sulphan blue dye leakage through liposome membrane ← clomipramine · direct sigmoid Emax (Hill) effect | — | Castaing M et al., Membrane permeation by multidrug-resist…, The Journal of pharmacy and… (2000) | [10.1211/0022357001773977](https://doi.org/10.1211/0022357001773977) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Di_2014_metamorphosis_rate_21_day_old_pediveliger_larvae_after_24_h_exposure](drugs/drug_clomipramine/pd_Di_2014_metamorphosis_rate_21_day_old_pediveliger_larvae_aft.md) | metamorphosis rate (21-day-old pediveliger larvae after 24 h exposure) ← clomipramine · inhibition effect | — | Di Poi C et al., Toxicity of five antidepressant drugs o…, Environmental science and p… (2014) | [10.1007/s11356-013-2211-y](https://doi.org/10.1007/s11356-013-2211-y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Di_2014_percentage_of_normal_larval_development_embryotoxicity_D_shaped_larvae_after_36_h_exposure](drugs/drug_clomipramine/pd_Di_2014_percentage_of_normal_larval_development_embryotoxici.md) | percentage of normal larval development (embryotoxicity, D-shaped larvae after 36 h exposure) ← clomipramine · inhibition effect | — | Di Poi C et al., Toxicity of five antidepressant drugs o…, Environmental science and p… (2014) | [10.1007/s11356-013-2211-y](https://doi.org/10.1007/s11356-013-2211-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gruwez_2007_depression_clinical_score_response_to_treatment](drugs/drug_clomipramine/pd_Gruwez_2007_depression_clinical_score_response_to_treatment.md) | depression clinical score (response to treatment) ← clomipramine · delayed effect through an effect compartment | — | Gruwez B et al., A kinetic-pharmacodynamic model for cli…, Contemporary clinical trials (2007) | [10.1016/j.cct.2006.09.001](https://doi.org/10.1016/j.cct.2006.09.001) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hrdina_1988_3H_imipramine_binding](drugs/drug_clomipramine/pd_Hrdina_1988_3H_imipramine_binding.md) | sodium-dependent [3H]imipramine binding in rat cerebral cortex ← clomipramine · direct sigmoid Emax (Hill) effect | — | Hrdina PD, Inhibition of sodium-dependent [3H]imip…, European journal of pharmac… (1988) | [10.1016/0014-2999(88)90575-4](https://doi.org/10.1016/0014-2999(88)90575-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Li_2018_Kv_current](drugs/drug_clomipramine/pd_Li_2018_Kv_current.md) | voltage-dependent K+ (Kv) channel current inhibition ← clomipramine · direct sigmoid Emax (Hill) effect | — | Li H et al., Blockade of voltage-dependent K, Journal of pharmacological… (2018) | [10.1016/j.jphs.2018.04.005](https://doi.org/10.1016/j.jphs.2018.04.005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [López-Valdés_2002_ACh_response](drugs/drug_clomipramine/pd_L_pez_Vald_s_2002_ACh_response.md) | acetylcholine-elicited current (alpha2beta4 nAChR) ← clomipramine · direct sigmoid Emax (Hill) effect | — | López-Valdés HE et al., Effects of clomipramine on neuronal nic…, European journal of pharmac… (2002) | [10.1016/s0014-2999(02)01556-x](https://doi.org/10.1016/s0014-2999(02)01556-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clomipramine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate, `GSTP1` inhibitor | DrugBank actor |
| metabolism | lung | `GSTP1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2A (target), HTR2B (target), HTR2C (target), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 4
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gex-Fabry_2000.pdf` | Gex-Fabry M et al., Population pharmacokinetics of clomipra…, Therapeutic drug monitoring (2000) | popPK | 10 | [10.1097/00007691-200012000-00009](https://doi.org/10.1097/00007691-200012000-00009) | [11128238](https://pubmed.ncbi.nlm.nih.gov/11128238) | Population PK model of clomipramine and its metabolites in depressed patients, but the evidence gives only variability percentages, not CL/V values, which likely live in tables/figures not provided. |
| `Lainesse_2006.pdf` | Lainesse C et al., Pharmacokinetics of clomipramine and de…, Journal of veterinary pharm… (2006) | popPK | 10 | [10.1111/j.1365-2885.2006.00742.x](https://doi.org/10.1111/j.1365-2885.2006.00742.x) | [16846464](https://pubmed.ncbi.nlm.nih.gov/16846464) | Full PK parameter values (CL, Vss, half-life, AUC, bioavailability) for clomipramine and DCMP are reported directly in the abstract. |
| `Kurata_1986.pdf` | Kurata K et al., A pharmacokinetic study of clomipramine…, The Japanese journal of psy… (1986) | popPK | 7 | [10.1111/j.1440-1819.1986.tb03178.x](https://doi.org/10.1111/j.1440-1819.1986.tb03178.x) | [3599564](https://pubmed.ncbi.nlm.nih.gov/3599564) | Rat PK study with compartmental model; some numeric values (ratio 22.2±4.9) present but full CL/V parameters not shown in evidence. |
| `Nielsen-Kudsk_1980.pdf` | Nielsen-Kudsk F et al., Myocardial pharmacokinetics of amitript…, Acta pharmacologica et toxi… (1980) | popPK | 7 | [10.1111/j.1600-0773.1980.tb02445.x](https://doi.org/10.1111/j.1600-0773.1980.tb02445.x) | [7361577](https://pubmed.ncbi.nlm.nih.gov/7361577) | Isolated perfused rabbit heart PK study with numeric myocardial half-life and accumulation for clomipramine, though compartmental rate constants are only partially given. |

<sub>queue written 2026-10-06T22:16:30.314827+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Razaq_2007 | irrelevant | 0 | 0 | In-vitro cell signaling study with no pharmacokinetic parameters for clomipramine. |
| popPK | Apparsundaram_2008 | irrelevant | 0 | 0 | In-vitro radioligand binding study of SERT inhibitors; clomipramine is only a test ligand with Ki/IC50 values, no PK disposition parameters. |
| popPK | Castaing_2000 | irrelevant | 0 | 0 | In-vitro liposome membrane permeation study; clomipramine is only one test compound, no PK disposition parameters reported. |
| popPK | Chanut_1994 | irrelevant | 0 | 0 | In-vitro rat synaptosome study where clomipramine is only an uptake inhibitor; no PK parameters for clomipramine. |
| PD | Chanut_1994 | not_relevant | 0 | 0 | The paper reports IC50/EC50 values for 6-fluoro-serotonin, not for clomipramine, and does not provide a dose-response or exposure-response relationship for clomipramine. |
| popPK | Di_2014 | irrelevant | 0 | 0 | Ecotoxicity study of clomipramine in oyster larvae with EC50 toxicity endpoints, no pharmacokinetic disposition parameters. |
| popPK | Fujita_1997 | irrelevant | 0 | 0 | Clomipramine is only a probe drug altering [123I]beta-CIT binding; no clomipramine PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Gex-Fabry_2000 | relevant | 10 | 3 | Population PK model of clomipramine and its metabolites in depressed patients, but the evidence gives only variability percentages, not CL/V values, which likely live in tables/figures not provided. |
| popPK | Gruwez_2007 | irrelevant | 2 | 1 | This is a kinetic-pharmacodynamic (K-PD) model of clinical depression scores, not a PK disposition model, and no numeric PK parameter values (CL, V, ka, etc.) appear in the evidence. |
| popPK | Hartmann_2017 | irrelevant | 0 | 0 | Clomipramine appears only as a reference inhibitor in an in-vitro enzyme assay; no pharmacokinetic parameters are reported. |
| PD | Hartmann_2017 | not_relevant | 0 | 0 | The paper reports IC50 values for new neolignan analogues and mentions clomipramine only as a reference inhibitor with a single IC50 value, without providing a dose-response curve, PK/PD model, or extractable PD parameters for clomipramine. |
| popPK | Hrdina_1988 | irrelevant | 0 | 0 | In-vitro receptor binding study with IC50 values, no pharmacokinetic disposition parameters for clomipramine. |
| popPK | Komorowski_2012 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters (no CL, V, ka, half-life, or model) reported for clomipramine. |
| popPK | Li_2018 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Kv channel blockade in rabbit coronary smooth muscle cells; no PK disposition parameters for clomipramine. |
| popPK | López-Valdés_2002 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor blockade in Xenopus oocytes; no PK disposition parameters for clomipramine. |
| popPK | Menargues_1990 | irrelevant | 0 | 0 | Pharmacodynamic receptor study in rats; no PK parameters for clomipramine. |
| popPK | Minguez_2014 | irrelevant | 0 | 0 | Ecotoxicity study reporting EC50 toxicity values, not pharmacokinetic disposition parameters for clomipramine. |
| popPK | Minguez_2014_2 | irrelevant | 0 | 0 | Ecotoxicity study reporting EC50 toxicity values in Daphnia magna, not pharmacokinetic disposition parameters for clomipramine. |
| PD | Minguez_2014_2 | not_relevant | 3 | 4 | The paper reports an acute ecotoxicity EC50 for clomipramine in Daphnia magna, which is a toxicological endpoint rather than a pharmacodynamic exposure-response relationship in a clinical or therapeutic context. |
| popPK | Muraoka_1998 | irrelevant | 0 | 0 | In-vitro cell signaling study with no pharmacokinetic parameters for clomipramine. |
| popPK | Pellegrini_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study of psilocybin in OCD; clomipramine is only mentioned as a first-line treatment, with no PK parameters for it. |
| popPK | Shimizu_1996 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study in rat astrocytes; clomipramine is only a chronic exposure treatment with no PK parameters. |
| PD | Shimizu_1996 | not_relevant | 1 | 0 | The paper reports a qualitative effect of clomipramine (mimicking mianserin) but provides no numeric concentration-effect data, EC50, or dose-response parameters for clomipramine itself. |
| popPK | Simpson_2008 | irrelevant | 0 | 0 | This is a statistical-methods paper on OCD trial efficacy with no pharmacokinetic parameters for clomipramine reported. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | This is a population PK study of haloperidol; clomipramine is only mentioned as a co-administered CYP2D6 substrate, with no clomipramine PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:16 UTC</sub>
