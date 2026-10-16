<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;nemonoxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nemonoxacin_Wu2024_reference&quot;,&quot;label&quot;:&quot;Wu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nemonoxacin/Nemonoxacin_Wu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nemonoxacin_Chen2023_reference&quot;,&quot;label&quot;:&quot;Chen_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# nemonoxacin

- **generic name:** nemonoxacin
- **ATC codes:** `J01MB08`
- **DrugBank:** [DB06600](https://go.drugbank.com/drugs/DB06600) · **PubChem:** not captured
- **molar mass:** 371.437 g/mol (C20H25N3O4) — DrugBank
- **groups:** investigational

## About

Nemonoxacin is a quinolone antibacterial developed as an antibiotic for bacterial infections. It is still investigational and has not been approved for general clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15425793](https://www.wikidata.org/wiki/Q15425793) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nemonoxacin | parent | 371.437 | C20H25N3O4 | DrugBank | — | Chen_2023, Kang_2019, Li_2021_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:22 | 3:34 | 1/1/2 | 0/0/0 | 0/0/0 | 204,952/15,575 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wu_2024_reference](drugs/drug_nemonoxacin/Nemonoxacin_Wu2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wu RL et al., Determination of Nemonoxacin in Small V…, Drug design, development an… (2024) | [10.2147/DDDT.S476173](https://doi.org/10.2147/DDDT.S476173) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Chen_2023_reference](drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 8 | Chen Y et al., Integrative population pharmacokinetic/…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.912962](https://doi.org/10.3389/fphar.2023.912962) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Kang_2019_reference](drugs/drug_nemonoxacin/Nemonoxacin_Kang2019_reference.md) | — | 1-compartment (no model) | 4 | Kang Y et al., Population Pharmacokinetics Study of Ne…, Clinical therapeutics (2019) | [10.1016/j.clinthera.2019.01.015](https://doi.org/10.1016/j.clinthera.2019.01.015) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">mouse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2021_2_reference](drugs/drug_nemonoxacin/Nemonoxacin_Li2021v2_reference.md) | — | 2-compartment (no model) | 3 | Li Y et al., Nemonoxacin dosage adjustment in patien…, British journal of clinical… (2021) | [10.1111/bcp.14881](https://doi.org/10.1111/bcp.14881) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nemonoxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kang_2019.pdf` | Kang Y et al., Population Pharmacokinetics Study of Ne…, Clinical therapeutics (2019) | popPK | 10 | [10.1016/j.clinthera.2019.01.015](https://doi.org/10.1016/j.clinthera.2019.01.015) | [30819510](https://pubmed.ncbi.nlm.nih.gov/30819510) | The study reports a population PK model for nemonoxacin in humans, providing specific AUC values and model structure, though specific CL, V, and Q parameter estimates are not listed in the provided abstract text. |
| `Li_2021_2.pdf` | Li Y et al., Nemonoxacin dosage adjustment in patien…, British journal of clinical… (2021) | popPK | 10 | [10.1111/bcp.14881](https://doi.org/10.1111/bcp.14881) | [33928669](https://pubmed.ncbi.nlm.nih.gov/33928669) | The paper reports specific population pharmacokinetic parameters (CL, Vc, Vp) for nemonoxacin in humans, with values clearly listed in the abstract. |

<sub>queue written 2026-10-14T23:19:16.190191+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study is an in vitro dynamic PK/PD model of vancomycin-nemonoxacin combinations in MRSA, and it reports no population PK parameters (CL, V, ka, etc.) for nemonoxacin in a biological system. |
| popPK | Liang_2013 | irrelevant | 2 | 0 | This is an in vitro pharmacodynamic study simulating PK, and no original quantitative disposition parameters (CL, V, ka) for nemonoxacin are reported in the provided evidence. |
| popPK | Qi_2026 | irrelevant | 2 | 2 | The study is an in-vitro dynamic PK/PD simulation using synthetic human urine and bacterial isolates, reporting PK/PD targets (AUC/MIC) and simulated concentrations rather than in-vivo quantitative disposition parameters (CL, V, ka, t1/2) for the drug itself. |
| popPK | Yuan_2022 | irrelevant | 2 | 0 | This is a systematic review focused on safety and adverse events, not a primary PK study reporting quantitative disposition parameters (CL, V, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:19 UTC</sub>
