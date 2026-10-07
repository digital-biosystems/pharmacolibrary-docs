<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01A&quot;,&quot;href&quot;:&quot;atc/J01A.md&quot;},{&quot;label&quot;:&quot;omadacycline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Omadacycline_Chapagain2022_reference&quot;,&quot;label&quot;:&quot;Chapagain_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Chapagain2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Omadacycline_Lakota2020_reference&quot;,&quot;label&quot;:&quot;Lakota_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Lakota2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Omadacycline_Singh2026_reference&quot;,&quot;label&quot;:&quot;Singh_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Singh2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# omadacycline

- **generic name:** omadacycline
- **ATC codes:** `J01AA15`
- **DrugBank:** [DB12455](https://go.drugbank.com/drugs/DB12455) · **PubChem:** [CID 54697325](https://pubchem.ncbi.nlm.nih.gov/compound/54697325)
- **molar mass:** 556.66 g/mol (C29H40N4O7) — DrugBank
- **groups:** approved, investigational

## About

Omadacycline is a tetracycline-class antibacterial used to treat bacterial infections. It is an approved medicine, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15426992](https://www.wikidata.org/wiki/Q15426992) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| omadacycline | parent | 556.66 | C29H40N4O7 | DrugBank | [54697325](https://pubchem.ncbi.nlm.nih.gov/compound/54697325) | Chapagain_2022, Lakota_2020, Yang_2022, Zhanel_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:03 | 3:40 | 3/1/2 | 2/0/2 | 0/0/0 | 285,554/16,775 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chapagain_2022_reference](drugs/drug_omadacycline/Omadacycline_Chapagain2022_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Chapagain M et al., Omadacycline efficacy in the hollow fib…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac068](https://doi.org/10.1093/jac/dkac068) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lakota_2020_reference](drugs/drug_omadacycline/Omadacycline_Lakota2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+3 cov.) | Lakota EA et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02263-19](https://doi.org/10.1128/AAC.02263-19) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Singh_2026_reference](drugs/drug_omadacycline/Omadacycline_Singh2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 3 | Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026) | [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.7163)</sub><br><sub>route_to: `human_review`</sub> | [Yang_2022_intravenous_administration](drugs/drug_omadacycline/Omadacycline_Yang2022_intravenous_administration.md) | — | 3-compartment (no model) | 15 | Yang H et al., Pharmacokinetics, Safety and Pharmacoki…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.869237](https://doi.org/10.3389/fphar.2022.869237) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Zhanel_2020_reference](drugs/drug_omadacycline/Omadacycline_Zhanel2020_reference.md) | — | 1-compartment (no model) | 7 | Zhanel GG et al., Omadacycline: A Novel Oral and Intraven…, Drugs (2020) | [10.1007/s40265-020-01257-4](https://doi.org/10.1007/s40265-020-01257-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yang_2022_oral_administration_a](drugs/drug_omadacycline/Omadacycline_Yang2022_oral_administration_a.md) | — | 2-compartment (no model) | 7 | Yang H et al., Pharmacokinetics, Safety and Pharmacoki…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.869237](https://doi.org/10.3389/fphar.2022.869237) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bhavnani_2023_log10_CFU](drugs/drug_omadacycline/pd_Bhavnani_2023_log10_CFU.md) | change in log10 CFU from baseline at 24 h ← omadacycline · direct sigmoid Emax (Hill) effect | — | Bhavnani SM et al., Pharmacokinetic-Pharmacodynamic Target…, Antimicrobial agents and ch… (2023) | [10.1128/aac.02213-21](https://doi.org/10.1128/aac.02213-21) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Bhavnani_2023_log10_CFU_2](drugs/drug_omadacycline/pd_Bhavnani_2023_log10_CFU_2.md) | change in log10 CFU from baseline at 24 h ← omadacycline · direct sigmoid Emax (Hill) effect | — | Bhavnani SM et al., Pharmacokinetic-Pharmacodynamic Target…, Antimicrobial agents and ch… (2023) | [10.1128/aac.02213-21](https://doi.org/10.1128/aac.02213-21) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chapagain_2022_B](drugs/drug_omadacycline/pd_Chapagain_2022_B.md) | Total bacterial burden ← omadacycline · disease-progression model | — | Chapagain M et al., Omadacycline efficacy in the hollow fib…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac068](https://doi.org/10.1093/jac/dkac068) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chapagain_2022_Bacterial_burden_on_each_sampling_day](drugs/drug_omadacycline/pd_Chapagain_2022_Bacterial_burden_on_each_sampling_day.md) | Bacterial burden on each sampling day ← omadacycline · direct sigmoid Emax (Hill) effect | — | Chapagain M et al., Omadacycline efficacy in the hollow fib…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac068](https://doi.org/10.1093/jac/dkac068) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chapagain_2022_Burden_decline_below_stasis](drugs/drug_omadacycline/pd_Chapagain_2022_Burden_decline_below_stasis.md) | Burden decline below stasis ← omadacycline · direct sigmoid Emax (Hill) effect | — | Chapagain M et al., Omadacycline efficacy in the hollow fib…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac068](https://doi.org/10.1093/jac/dkac068) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chapagain_2022_slope](drugs/drug_omadacycline/pd_Chapagain_2022_slope.md) | γ-Kill slope ← omadacycline · direct sigmoid Emax (Hill) effect | — | Chapagain M et al., Omadacycline efficacy in the hollow fib…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac068](https://doi.org/10.1093/jac/dkac068) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Singh_2024_CFU_mL](drugs/drug_omadacycline/pd_Singh_2024_CFU_mL.md) | Mycobacterium tuberculosis bacterial load ← omadacycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Singh S et al., Omadacycline pharmacokinetics/pharmacod…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01080-23](https://doi.org/10.1128/aac.01080-23) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [VanScoy_2020_change_in_the_log10_CFU_ml_from_baseline_at_24_h](drugs/drug_omadacycline/pd_VanScoy_2020_change_in_the_log10_CFU_ml_from_baseline_at_24_.md) | change in the log10 CFU/ml from baseline at 24 h ← omadacycline · direct sigmoid Emax (Hill) effect | model (no simulator) | VanScoy BD et al., Pharmacokinetic-Pharmacodynamic Charact…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02265-19](https://doi.org/10.1128/AAC.02265-19) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=omadacycline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 18 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 3  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2024.pdf` | Wang K et al., Evaluation of omadacycline dosing regim…, European journal of pharmac… (2024) | popPK | 10 | [10.1016/j.ejps.2024.106713](https://doi.org/10.1016/j.ejps.2024.106713) | [38295963](https://pubmed.ncbi.nlm.nih.gov/38295963) | The paper describes a population pharmacokinetic study of omadacycline in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract or text evidence. |
| `Rodvold_2020.pdf` | Rodvold KA et al., Omadacycline: A Review of the Clinical…, Clinical pharmacokinetics (2020) | popPK | 7 | [10.1007/s40262-019-00843-4](https://doi.org/10.1007/s40262-019-00843-4) | [31773505](https://pubmed.ncbi.nlm.nih.gov/31773505) | The text describes the pharmacokinetic properties and mentions a population model but provides no specific numeric values for clearance, volume, or half-life, and likely references data not present in the excerpt. |
| `Zhanel_2020.pdf` | Zhanel GG et al., Omadacycline: A Novel Oral and Intraven…, Drugs (2020) | popPK | 6 | [10.1007/s40265-020-01257-4](https://doi.org/10.1007/s40265-020-01257-4) | [31970713](https://pubmed.ncbi.nlm.nih.gov/31970713) | The abstract reports key non-compartmental PK parameters (CL, Vd, t1/2, F) but lacks full compartmental model values (Q, ka) required for comprehensive population PK analysis. |

<sub>queue written 2026-10-07T10:01:00.196203+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhavnani_2023 | irrelevant | 1 | 0 | This is a PK-PD simulation study that utilizes a pre-existing population PK model to assess dosing, but it does not report the primary quantitative PK parameters (CL, V, etc.) for omadacycline in the provided text. |
| popPK | Bhavnani_2024 | irrelevant | 6 | 2 | The paper is a PK-PD efficacy analysis that utilizes a population PK model but does not report the specific quantitative disposition parameters (CL, V, Q, ka) for omadacycline in the evidence, which are likely in supplementary material or the referenced original PK modeling papers. |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The study is an in vitro efficacy investigation of omadacycline against Mycobacterium abscessus and contains no population pharmacokinetic parameters or models for the drug. |
| popPK | Khalid_2023 | irrelevant | 4 | 1 | The paper is a narrative review that discusses omadacycline PK/PD modelling qualitatively (describing model structure and covariates) but does not report any numeric PK parameter values (e.g., CL, V, ka) in the provided text. |
| popPK | Morrisette_2023 | irrelevant | 0 | 0 | This is an in vitro microbiology study focusing on biofilm activity and MICs, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for omadacycline. |
| popPK | Rodvold_2020 | relevant | 7 | 0 | The text describes the pharmacokinetic properties and mentions a population model but provides no specific numeric values for clearance, volume, or half-life, and likely references data not present in the excerpt. |
| popPK | Singh_2022 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study in a hollow fiber system model, not a population-pharmacokinetic study reporting quantitative disposition parameters (CL, V, Q, ka) for omadacycline. |
| popPK | Singh_2024 | irrelevant | 2 | 0 | The study reports PK/PD metrics (AUC/MIC ratios, MICs) and efficacy in an in vitro/hollow-fiber system rather than systemic disposition parameters (CL, V, ka) for omadacycline. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The study focuses on the PK/PD of eravacycline; omadacycline is only mentioned as a comparator drug with efficacy data, and no PK parameters for omadacycline are reported. |
| popPK | VanScoy_2020 | irrelevant | 0 | 0 | The study is an in vitro infection model characterizing PK-PD targets (AUC/MIC) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka, Q) for omadacycline. |
| popPK | Wang_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic study of omadacycline in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract or text evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:01 UTC</sub>
