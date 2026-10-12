<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;}]"></div>

# avelumab

- **generic name:** avelumab
- **ATC codes:** `L01FF04`
- **DrugBank:** [DB11945](https://go.drugbank.com/drugs/DB11945) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Avelumab is a fully human anti-PD-L1 monoclonal antibody used as cancer immunotherapy, studied for tumours including Merkel cell carcinoma, bladder, ovarian, stomach, kidney, head and neck, and lung cancers, and mesothelioma. It is an approved anticancer medicine, with additional uses still under investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21083261](https://www.wikidata.org/wiki/Q21083261) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:51 | 12:50 | 0/1/4 | 2/0/0 | 0/0/0 | 269,817/60,652 | openai / gpt-6-luna | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q31 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [van_2025_reference](drugs/drug_avelumab/Avelumab_van2025_reference.md) | — | 1-compartment (no model) | 2 (+6 cov.) | van der Walt JS et al., Interplay between pharmacokinetics and…, Journal of pharmacokinetics… (2025) | [10.1007/s10928-025-09971-w](https://doi.org/10.1007/s10928-025-09971-w) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.545). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Masters_2022_reference](drugs/drug_avelumab/Avelumab_Masters2022_reference.md) | — | 2-compartment (no model) | 4 (+3 cov.) | Masters JC et al., Model-informed drug development support…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12771](https://doi.org/10.1002/psp4.12771) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.438). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Vugmeyster_2022_reference](drugs/drug_avelumab/Avelumab_Vugmeyster2022_reference.md) | — | 1-compartment (no model) | 6 (+1 cov.) | Vugmeyster Y et al., Avelumab Dose Selection for Clinical St…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01111-8](https://doi.org/10.1007/s40262-022-01111-8) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.568). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Wilkins_2019_reference](drugs/drug_avelumab/Avelumab_Wilkins2019_reference.md) | — | 2-compartment (no model) | 4 (+12 cov.) | Wilkins JJ et al., Time-Varying Clearance and Impact of Di…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12406](https://doi.org/10.1002/psp4.12406) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.688). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Grisic_2022_reference](drugs/drug_avelumab/Avelumab_Grisic2022_reference.md) | — | 2-compartment (no model) | 6 (+3 cov.) | Grisic AM et al., Model-Based Characterization of the Bid…, Clinical cancer research :… (2022) | [10.1158/1078-0432.CCR-21-2662](https://doi.org/10.1158/1078-0432.CCR-21-2662) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_eGFP](drugs/drug_avelumab/pd_De_2019_eGFP.md) | normalized stimulation ← avelumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_gMFI](drugs/drug_avelumab/pd_De_2019_gMFI.md) | binding ← avelumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span> | [Warmuth_2021_NFAT](drugs/drug_avelumab/pd_Warmuth_2021_NFAT.md) | NFAT-luciferase expression ← avelumab · direct sigmoid Emax (Hill) effect | — | Warmuth S et al., Engineering of a trispecific tumor-targ…, Oncoimmunology (2021) | [10.1080/2162402X.2021.2004661](https://doi.org/10.1080/2162402X.2021.2004661) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span> | [Warmuth_2021_PD_L1_B7_1_interaction](drugs/drug_avelumab/pd_Warmuth_2021_PD_L1_B7_1_interaction.md) | PD-L1/B7.1 interaction ← avelumab · direct sigmoid Emax (Hill) effect | — | Warmuth S et al., Engineering of a trispecific tumor-targ…, Oncoimmunology (2021) | [10.1080/2162402X.2021.2004661](https://doi.org/10.1080/2162402X.2021.2004661) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span> | [Warmuth_2021_PD_L1_PD_1_interactions](drugs/drug_avelumab/pd_Warmuth_2021_PD_L1_PD_1_interactions.md) | PD-L1/PD-1 interactions ← avelumab · direct sigmoid Emax (Hill) effect | — | Warmuth S et al., Engineering of a trispecific tumor-targ…, Oncoimmunology (2021) | [10.1080/2162402X.2021.2004661](https://doi.org/10.1080/2162402X.2021.2004661) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=avelumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD274 (antibody), CD274 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2019 | irrelevant | 0 | 0 | This is an in-vitro efficacy study, and avelumab disposition values are not provided; half-life is only referenced in a table. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | Avelumab is evaluated for tumor pharmacodynamics, with no quantitative disposition parameters reported. |
| popPK | Mjaess_2026 | irrelevant | 0 | 0 | This clinical outcomes analysis reports no quantitative avelumab pharmacokinetic parameters. |
| popPK | Vugmeyster_2019 | irrelevant | 1 | 0 | This human exposure–QTc analysis reports no quantitative avelumab disposition parameters. |
| popPK | Warmuth_2021 | irrelevant | 1 | 0 | Avelumab is only an in-vitro comparator; the reported half-life is for NM21-1480. |
| popPK | Xiao_2021 | irrelevant | 0 | 0 | Avelumab is only compared in an endocytosis assay; no avelumab disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:40 UTC</sub>
