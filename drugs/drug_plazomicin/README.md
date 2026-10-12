<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;plazomicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Plazomicin_Kuti2019v2_reference&quot;,&quot;label&quot;:&quot;Kuti_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_plazomicin/Plazomicin_Kuti2019v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plazomicin_Trang2019v2_geometric_mean_value_cv_d&quot;,&quot;label&quot;:&quot;Trang_2019_2_geometric_mean_value_cv_d&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_plazomicin/Plazomicin_Trang2019v2_geometric_mean_value_cv_d.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# plazomicin

- **generic name:** plazomicin
- **ATC codes:** `J01GB14`
- **DrugBank:** [DB12615](https://go.drugbank.com/drugs/DB12615) · **PubChem:** [CID 42613186](https://pubchem.ncbi.nlm.nih.gov/compound/42613186)
- **molar mass:** 592.691 g/mol (C25H48N6O10) — DrugBank
- **groups:** approved

## About

Plazomicin is an aminoglycoside antibacterial used to treat serious bacterial infections. It is an approved medicine, but it is not authorised in the European Union and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15426988](https://www.wikidata.org/wiki/Q15426988) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| plazomicin | parent | 592.691 | C25H48N6O10 | DrugBank | [42613186](https://pubchem.ncbi.nlm.nih.gov/compound/42613186) | Trang_2019_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:59 | 2:11 | 2/0/1 | 0/0/0 | 0/0/0 | 147,828/7,523 | einfracz / qwen3.8-27b | 12 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span> | [Kuti_2019_2_reference](drugs/drug_plazomicin/Plazomicin_Kuti2019v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kuti JL et al., Evaluation of Plazomicin, Tigecycline,…, Infectious diseases and the… (2019) | [10.1007/s40121-019-0251-4](https://doi.org/10.1007/s40121-019-0251-4) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Trang_2019_2_geometric_mean_value_cv_d](drugs/drug_plazomicin/Plazomicin_Trang2019v2_geometric_mean_value_cv_d.md) | ▶ model + simulator | 1-compartment, IV | 9 | Trang M et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02329-18](https://doi.org/10.1128/AAC.02329-18) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.381). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Trang_2019_2_final_model](drugs/drug_plazomicin/Plazomicin_Trang2019v2_final_model.md) | — | 1-compartment (no model) | 3 (+5 cov.) | Trang M et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02329-18](https://doi.org/10.1128/AAC.02329-18) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhuang_2022.pdf` | Zhuang L et al., Application of Population Pharmacokinet…, Antimicrobial agents and ch… (2022) | popPK | 8 | [10.1128/aac.02074-21](https://doi.org/10.1128/aac.02074-21) | [35258314](https://pubmed.ncbi.nlm.nih.gov/35258314) | The study describes a population PK model and TDM strategy for plazomicin, but no quantitative parameter values (CL, V, etc.) are present in the provided evidence. |

<sub>queue written 2026-10-07T15:57:58.012334+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kuti_2019_2 | irrelevant | 5 | 3 | The study constructs PK models and reports quantitative parameters (CL, V, k) only for the adjunctive agents tigecycline and meropenem, not for plazomicin, for which only AUC/MIC PD targets are evaluated using pre-existing AUC data. |
| popPK | Luterbach_2022 | irrelevant | 2 | 0 | This is a review article discussing PK/PD modeling approaches for plazomicin and does not report original quantitative disposition parameters in the provided evidence. |
| popPK | Shin_2024 | irrelevant | 2 | 0 | This is a population pharmacokinetic study of five aminoglycosides, but the specific drug plazomicin is not identified as the subject, and no quantitative parameter values for it are provided in the evidence. |
| popPK | Zhuang_2022 | irrelevant | 8 | 0 | The study describes a population PK model and TDM strategy for plazomicin, but no quantitative parameter values (CL, V, etc.) are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:58 UTC</sub>
