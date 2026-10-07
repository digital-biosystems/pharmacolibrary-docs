<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;flucloxacillin&quot;}]"></div>

# flucloxacillin

- **generic name:** flucloxacillin
- **ATC codes:** `J01CF05`
- **DrugBank:** [DB00301](https://go.drugbank.com/drugs/DB00301) · **PubChem:** [CID 21319](https://pubchem.ncbi.nlm.nih.gov/compound/21319)
- **molar mass:** 453.872 g/mol (C19H17ClFN3O5S) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Flucloxacillin is a penicillin antibiotic that resists breakdown by bacterial beta-lactamase enzymes and has been used to treat infections such as meningitis. It remains an approved antibacterial for systemic use, though some approved products have been withdrawn in certain markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1994556](https://www.wikidata.org/wiki/Q1994556) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flucloxacillin | parent | 453.872 | C19H17ClFN3O5S | DrugBank | [21319](https://pubchem.ncbi.nlm.nih.gov/compound/21319) | Drennan_2021_2, Jager_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:04 | 1:53 | 0/4/3 | 0/0/0 | 0/0/0 | 136,311/5,627 | einfracz / qwen3.8-27b | 16 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Drennan_2021_2_base](drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_base.md) | — | 1-compartment (no model) | 5 | Drennan PG et al., Population pharmacokinetics of free flu…, British journal of clinical… (2021) | [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: not captured</sub> | [Drennan_2021_2_reference](drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_reference.md) | — | — (no model) | 0 | Drennan PG et al., Population pharmacokinetics of free flu…, British journal of clinical… (2021) | [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: not captured</sub> | [Jager_2020_reference](drugs/drug_flucloxacillin/Flucloxacillin_Jager2020_reference.md) | — | — (no model) | 0 | Jager NGL et al., Optimization of flucloxacillin dosing r…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkaa187](https://doi.org/10.1093/jac/dkaa187) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Drennan_2021_2_final](drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_final.md) | — | 1-compartment (no model) | 6 | Drennan PG et al., Population pharmacokinetics of free flu…, British journal of clinical… (2021) | [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Jager_2020_base](drugs/drug_flucloxacillin/Flucloxacillin_Jager2020_base.md) | — | 2-compartment (no model) | 6 | Jager NGL et al., Optimization of flucloxacillin dosing r…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkaa187](https://doi.org/10.1093/jac/dkaa187) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Jager_2020_final](drugs/drug_flucloxacillin/Flucloxacillin_Jager2020_final.md) | — | 2-compartment (no model) | 6 | Jager NGL et al., Optimization of flucloxacillin dosing r…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkaa187](https://doi.org/10.1093/jac/dkaa187) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wallenburg_2021_reference](drugs/drug_flucloxacillin/Flucloxacillin_Wallenburg2021_reference.md) | — | 1-compartment (no model) | 0 | Wallenburg E et al., High unbound flucloxacillin fraction in…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkab314](https://doi.org/10.1093/jac/dkab314) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flucloxacillin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 12 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 7  ·  extracted 0  ·  needs_review 1  ·  rejected 4  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anderson_1985.pdf` | Anderson P et al., Pharmacokinetics and distribution of fl…, European journal of clinica… (1985) | popPK | 10 | [10.1007/BF00547055](https://doi.org/10.1007/BF00547055) | [3987776](https://pubmed.ncbi.nlm.nih.gov/3987776) | The study reports quantitative two-compartment PK parameters (CL, Vc, Vd, half-lives) for flucloxacillin in humans, with all numeric values explicitly present in the abstract. |
| `Hermann_2024.pdf` | Hermann L et al., Population pharmacokinetics of flucloxa…, The Journal of antimicrobia… (2024) | popPK | 10 | [10.1093/jac/dkae207](https://doi.org/10.1093/jac/dkae207) | [38946285](https://pubmed.ncbi.nlm.nih.gov/38946285) | The paper is a population pharmacokinetic study of flucloxacillin in humans, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence, which contains only the abstract. |
| `Öbrink-Hansen_2022.pdf` | Öbrink-Hansen K et al., Population Pharmacokinetics of Flucloxa…, Pharmaceutical research (2022) | popPK | 10 | [10.1007/s11095-022-03197-y](https://doi.org/10.1007/s11095-022-03197-y) | [35233728](https://pubmed.ncbi.nlm.nih.gov/35233728) | The paper describes a population PK model for flucloxacillin in pigs and humans, but specific numeric parameter estimates (CL, V) are not explicitly listed in the provided text. |
| `Boast_2026.pdf` | Boast A et al., Effect of ibuprofen on the pharmacokine…, International journal of an… (2026) | popPK | 9 | [10.1016/j.ijantimicag.2025.107684](https://doi.org/10.1016/j.ijantimicag.2025.107684) | [41338520](https://pubmed.ncbi.nlm.nih.gov/41338520) | The study reports a population PK model for flucloxacillin, but the specific numeric parameter estimates (CL, V, etc.) are not listed in the provided evidence text. |

<sub>queue written 2026-10-07T10:02:33.103019+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boast_2026 | relevant | 9 | 2 | The study reports a population PK model for flucloxacillin, but the specific numeric parameter estimates (CL, V, etc.) are not listed in the provided evidence text. |
| popPK | Hermann_2024 | relevant | 10 | 0 | The paper is a population pharmacokinetic study of flucloxacillin in humans, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence, which contains only the abstract. |
| popPK | Janknegt_1997 | irrelevant | 2 | 0 | This is a review/clinical perspective on antibiotic policy and pharmacoeconomics for staphylococcal infections; it mentions flucloxacillin's efficacy and cost but provides no quantitative PK parameter values. |
| popPK | Korzilius_2023 | irrelevant | 4 | 2 | The study is a multi-drug bioavailability assessment in SBS patients using non-compartmental analysis (AUC, Cmax) rather than estimating compartmental PK parameters (CL, V, ka) for flucloxacillin, and specific numeric values for flucloxacillin are in Table 2 (not provided). |
| popPK | Meenks_2023_2 | relevant | 10 | 4 | The study reports a population PK model for flucloxacillin, but the final numeric parameter estimates (CL, V) are in Table 2 which is not provided; only clearance comparisons (77.5 L/h) and unbound fraction estimates are visible in the text. |
| popPK | Wallenburg_2022 | irrelevant | 2 | 0 | The study reports parameters for a mechanistic protein-binding model (fraction unbound) rather than standard disposition PK parameters like clearance or volume, and no specific numeric model parameter estimates are provided in the text. |
| popPK | Zwiers_2011 | irrelevant | 0 | 0 | The paper focuses on sugammadex-pharmacodynamic interactions and only lists flucloxacillin as a drug with potential for displacement, without reporting any quantitative pharmacokinetic parameters (CL, V, etc.) for flucloxacillin. |
| popPK | Öbrink-Hansen_2022 | relevant | 10 | 4 | The paper describes a population PK model for flucloxacillin in pigs and humans, but specific numeric parameter estimates (CL, V) are not explicitly listed in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:02 UTC</sub>
