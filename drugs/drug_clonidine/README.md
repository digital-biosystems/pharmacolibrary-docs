<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;clonidine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/Clonidine_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# clonidine

- **generic name:** clonidine
- **ATC codes:** `C02AC01`, `C02LC01`, `C02LC51`, `N02CX02`, `S01EA04`
- **DrugBank:** [DB00575](https://go.drugbank.com/drugs/DB00575) · **PubChem:** [CID 2803](https://pubchem.ncbi.nlm.nih.gov/compound/2803)
- **molar mass:** 230.094 g/mol (C9H9Cl2N3) — DrugBank
- **groups:** approved, investigational

## About

Clonidine is a centrally acting alpha-2 agonist used to treat high blood pressure, and also for conditions such as glaucoma, ADHD, Tourette syndrome, spasticity, and hypersalivation. It remains an approved medicine in widespread use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412221](https://www.wikidata.org/wiki/Q412221) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clonidine | parent | 230.094 | C9H9Cl2N3 | DrugBank | [2803](https://pubchem.ncbi.nlm.nih.gov/compound/2803) | Bardol_2025, Chiang_1986, Davies_1977, Larsson_2011, Potts_2007 |
| 1-OH midazolam | metabolite | 341.77 | C18H13ClFN3O | PubChem | [107917](https://pubchem.ncbi.nlm.nih.gov/compound/107917) | Bardol_2025 |
| midazolam | metabolite | 325.771 | C18H13ClFN3 | PubChem | [4192](https://pubchem.ncbi.nlm.nih.gov/compound/4192) | Bardol_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 11:26 | 6:17 | 1/4/3 | 3/0/1 | 0/0/0 | 291,599/45,127 | einfracz / qwen3.8-27b | 15 | 9/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.333), gpt-oss:120b (partly confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: partial 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Tang_2021_reference](drugs/drug_clonidine/Clonidine_Tang2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Tang F et al., Clinical pharmacology and dosing regime…, Clinical and translational… (2021) | [10.1111/cts.12994](https://doi.org/10.1111/cts.12994) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Bardol_2025_reference](drugs/drug_clonidine/Clonidine_Bardol2025_reference.md) | — | parent + metabolite (no model) | 4 | Bardol M et al., Pharmacokinetic and Pharmacodynamic Mod…, Paediatric anaesthesia (2025) | [10.1111/pan.70050](https://doi.org/10.1111/pan.70050) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.364), gpt-oss:120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Davies_1977_reference](drugs/drug_clonidine/Clonidine_Davies1977_reference.md) | — | 1-compartment (no model) | 4 | Davies DS et al., Pharmacokinetics and concentration-effe…, Clinical pharmacology and t… (1977) | [10.1002/cpt1977215593](https://doi.org/10.1002/cpt1977215593) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158), gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q30 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Larsson_2011_reference](drugs/drug_clonidine/Clonidine_Larsson2011_reference.md) | — | 2-compartment (no model) | 7 | Larsson P et al., Oral bioavailability of clonidine in ch…, Paediatric anaesthesia (2011) | [10.1111/j.1460-9592.2010.03397.x](https://doi.org/10.1111/j.1460-9592.2010.03397.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Blackburn_2014_reference](drugs/drug_clonidine/Clonidine_Blackburn2014_reference.md) | — | 1-compartment (no model) | 0 | RashidMKhan et al. (2014) | [10.1111/pan.12292](https://doi.org/10.1111/pan.12292) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: disputed 1/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Chiang_1986_reference](drugs/drug_clonidine/Clonidine_Chiang1986_reference.md) | — | 1-compartment (no model) | 6 | Chiang CH et al., Ocular pharmacokinetic models of clonid…, Journal of pharmacokinetics… (1986) | [10.1007/BF01065260](https://doi.org/10.1007/BF01065260) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Paalzow_1979_reference](drugs/drug_clonidine/Clonidine_Paalzow1979_reference.md) | — | 1-compartment (no model) | 0 | Paalzow LK et al., Pharmacokinetics of clonidine in the ra…, Journal of pharmacokinetics… (1979) | [10.1007/BF01062390](https://doi.org/10.1007/BF01062390) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.562), gpt-oss:120b (not confirmed, agreement 0.158). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Potts_2007_reference](drugs/drug_clonidine/Clonidine_Potts2007_reference.md) | — | 2-compartment (no model) | 9 | Potts AL et al., Clonidine disposition in children; a po…, Paediatric anaesthesia (2007) | [10.1111/j.1460-9592.2007.02251.x](https://doi.org/10.1111/j.1460-9592.2007.02251.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> | [Bardol_2025_COMFORT_B](drugs/drug_clonidine/pd_Bardol_2025_COMFORT_B.md) | COMFORT‐B score ← clonidine · direct sigmoid Emax (Hill) effect | model (no simulator) | Bardol M et al., Pharmacokinetic and Pharmacodynamic Mod…, Paediatric anaesthesia (2025) | [10.1111/pan.70050](https://doi.org/10.1111/pan.70050) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2016_hot_flashes](drugs/drug_clonidine/pd_Li_2016_hot_flashes.md) | hot flashes ← clonidine · direct Emax (saturable) effect | — | Li L et al., Comparative efficacy of nonhormonal dru…, European journal of clinica… (2016) | [10.1007/s00228-016-2090-5](https://doi.org/10.1007/s00228-016-2090-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Porchet_1992_MAP](drugs/drug_clonidine/pd_Porchet_1992_MAP.md) | mean arterial blood pressure ← clonidine · delayed effect through an effect compartment | — | Porchet HC et al., Pharmacokinetic-pharmacodynamic modelin…, European journal of clinica… (1992) | [10.1007/BF00265932](https://doi.org/10.1007/BF00265932) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Porchet_1992_RIII](drugs/drug_clonidine/pd_Porchet_1992_RIII.md) | objective pain threshold ← clonidine · delayed effect through an effect compartment | — | Porchet HC et al., Pharmacokinetic-pharmacodynamic modelin…, European journal of clinica… (1992) | [10.1007/BF00265932](https://doi.org/10.1007/BF00265932) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Porchet_1992_SF](drugs/drug_clonidine/pd_Porchet_1992_SF.md) | salivary flow ← clonidine · delayed effect through an effect compartment | — | Porchet HC et al., Pharmacokinetic-pharmacodynamic modelin…, European journal of clinica… (1992) | [10.1007/BF00265932](https://doi.org/10.1007/BF00265932) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Porchet_1992_VAS](drugs/drug_clonidine/pd_Porchet_1992_VAS.md) | subjective pain threshold ← clonidine · delayed effect through an effect compartment | — | Porchet HC et al., Pharmacokinetic-pharmacodynamic modelin…, European journal of clinica… (1992) | [10.1007/BF00265932](https://doi.org/10.1007/BF00265932) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yocca_2025_stimulating_35S_GTP_S_binding_to_membranes_expressing_human_2A_2B_or_2C_receptors](drugs/drug_clonidine/pd_Yocca_2025_stimulating_35S_GTP_S_binding_to_membranes_expres.md) | stimulating [35S]GTPγS binding to membranes expressing human α2A, α2B or α2C receptors ← Clonidine · direct sigmoid Emax (Hill) effect | model (no simulator) | Yocca FD et al., Dexmedetomidine potently and reversibly…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1589075](https://doi.org/10.3389/fphar.2025.1589075) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yocca_2025_stimulating_arrestin_binding_to_membranes_expressing_human_2A_2B_or_2C_receptors](drugs/drug_clonidine/pd_Yocca_2025_stimulating_arrestin_binding_to_membranes_express.md) | stimulating β-arrestin binding to membranes expressing human α2A, α2B or α2C receptors ← Clonidine · direct sigmoid Emax (Hill) effect | model (no simulator) | Yocca FD et al., Dexmedetomidine potently and reversibly…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1589075](https://doi.org/10.3389/fphar.2025.1589075) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clonidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), AOC3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 225 matched, 20 returned
- **screened:** 16  ·  **relevant:** 6
- **records:** 8  ·  extracted 1  ·  needs_review 3  ·  rejected 4  ·  stale 7
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chiang_1986.pdf` | Chiang CH et al., Ocular pharmacokinetic models of clonid…, Journal of pharmacokinetics… (1986) | popPK | 10 | [10.1007/BF01065260](https://doi.org/10.1007/BF01065260) | [3746638](https://pubmed.ncbi.nlm.nih.gov/3746638) | The study reports specific quantitative pharmacokinetic parameters (ka, k10, MRT, Vss, clearance) for clonidine in the rabbit eye. |
| `Davies_1977.pdf` | Davies DS et al., Pharmacokinetics and concentration-effe…, Clinical pharmacology and t… (1977) | popPK | 10 | [10.1002/cpt1977215593](https://doi.org/10.1002/cpt1977215593) | [870272](https://pubmed.ncbi.nlm.nih.gov/870272) | The abstract provides explicit quantitative PK parameters (half-lives, clearance, bioavailability) for clonidine in humans. |
| `Larsson_2011.pdf` | Larsson P et al., Oral bioavailability of clonidine in ch…, Paediatric anaesthesia (2011) | popPK | 10 | [10.1111/j.1460-9592.2010.03397.x](https://doi.org/10.1111/j.1460-9592.2010.03397.x) | [20735802](https://pubmed.ncbi.nlm.nih.gov/20735802) | The study reports quantitative population pharmacokinetic parameters (CL, V1, V2, Q, Tabs, Tlag) for clonidine in humans with values explicitly listed in the text. |
| `Potts_2007.pdf` | Potts AL et al., Clonidine disposition in children; a po…, Paediatric anaesthesia (2007) | popPK | 10 | [10.1111/j.1460-9592.2007.02251.x](https://doi.org/10.1111/j.1460-9592.2007.02251.x) | [17767627](https://pubmed.ncbi.nlm.nih.gov/17767627) | The paper reports a population pharmacokinetic analysis for clonidine in children with all quantitative parameter values (CL, V1, V2, Q) explicitly listed in the abstract. |
| `Paalzow_1979.pdf` | Paalzow LK et al., Pharmacokinetics of clonidine in the ra…, Journal of pharmacokinetics… (1979) | popPK | 9 | [10.1007/BF01062390](https://doi.org/10.1007/BF01062390) | [529018](https://pubmed.ncbi.nlm.nih.gov/529018) | The paper describes a PK study of clonidine in rats and cats with a two-compartment model, but the specific numeric parameter values are not present in the provided evidence text. |
| `Yellepeddi_2024.pdf` | Yellepeddi V et al., Optimal Dosing Recommendations of Cloni…, The journal of pediatric ph… (2024) | popPK | 9 | [10.5863/1551-6776-29.6.636](https://doi.org/10.5863/1551-6776-29.6.636) | [39659862](https://pubmed.ncbi.nlm.nih.gov/39659862) | The study develops a PBPK model for clonidine, but specific quantitative parameter values (CL, V, etc.) are not listed in the provided evidence, only model performance metrics and recommended doses. |
| `Porchet_1992.pdf` | Porchet HC et al., Pharmacokinetic-pharmacodynamic modelin…, European journal of clinica… (1992) | popPK | 5 | [10.1007/BF00265932](https://doi.org/10.1007/BF00265932) | [1623908](https://pubmed.ncbi.nlm.nih.gov/1623908) | The study describes a pharmacokinetic-pharmacodynamic modeling of clonidine in humans and reports some derived parameters (effect compartment half-lives), but the primary quantitative PK parameter values (CL, V) are not present in the provided evidence text. |

<sub>queue written 2026-10-08T11:20:31.696434+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arndts_1983 | irrelevant | 2 | 0 | The abstract reports a half-life and urine excretion percentage but explicitly states the data cannot be described by a conventional compartmental model and lacks the quantitative parameters (CL, V, ka) required for extraction. |
| popPK | Bienert_2015 | irrelevant | 0 | 0 | Clonidine is a premedication agent, and the pharmacokinetic modeling and quantitative parameters are exclusively for the subject drug propofol. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study focuses on the receptor pharmacology of mitragynine, with clonidine used only as a positive control or comparator agent rather than as the subject of pharmacokinetic analysis. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper focuses on the in vitro pharmacology of mitragynine; clonidine is used only as a reference control, and no PD parameters or exposure-response relationships for clonidine are reported. |
| popPK | Dantas_2014 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of receptor effects on the isolated rat testicular capsule, not a pharmacokinetic study, and reports no disposition parameters for clonidine. |
| popPK | Doggrell_2001_2 | irrelevant | 0 | 0 | The paper is a review of moxonidine, and while it briefly mentions clonidine's mechanism, it provides no quantitative pharmacokinetic parameters for clonidine. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis focused on the efficacy of hot flash reduction, not the pharmacokinetic disposition parameters of clonidine. |
| popPK | Lowenthal_1980 | irrelevant | not captured | not captured | no extractable full text |
| popPK | Paalzow_1979 | relevant | 9 | 0 | The paper describes a PK study of clonidine in rats and cats with a two-compartment model, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Porchet_1992 | relevant | 5 | 0 | The study describes a pharmacokinetic-pharmacodynamic modeling of clonidine in humans and reports some derived parameters (effect compartment half-lives), but the primary quantitative PK parameter values (CL, V) are not present in the provided evidence text. |
| popPK | Valles_1995 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for idazoxan (the antagonist), not clonidine (the agonist/probe). |
| popPK | Weetman_1983 | irrelevant | 0 | 0 | The paper is a pharmacological mechanistic study of Sgd 101/75, with clonidine used only as a comparator agent in in vitro preparations; no pharmacokinetic parameters are reported. |
| PD | Weetman_1983 | not_relevant | 1 | 1 | The paper focuses on the pharmacological characterization of Sgd 101/75; clonidine is used only as a reference agonist in functional assays, and no exposure-response or dose-response PD parameters for clonidine itself are reported. |
| popPK | Yalcin_2022 | irrelevant | 3 | 3 | This is a literature review where clonidine is one of 11 drugs discussed; specific quantitative PK parameters (CL, Vd) for clonidine are not provided in the text, only qualitative trends and dosing recommendations are mentioned. |
| popPK | Yellepeddi_2024 | relevant | 9 | 2 | The study develops a PBPK model for clonidine, but specific quantitative parameter values (CL, V, etc.) are not listed in the provided evidence, only model performance metrics and recommended doses. |
| popPK | Yocca_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of dexmedetomidine, with clonidine serving only as a comparator in in vitro receptor assays rather than the subject of PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-08 11:20 UTC</sub>
