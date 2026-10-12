<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;vericiguat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vericiguat_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# vericiguat

- **generic name:** vericiguat
- **ATC codes:** `C01DX22`
- **DrugBank:** [DB15456](https://go.drugbank.com/drugs/DB15456) · **PubChem:** not captured
- **molar mass:** 426.388 g/mol (C19H16F2N8O2) — DrugBank
- **groups:** approved, investigational

## About

Vericiguat is a vasodilator used to treat heart failure. It is approved and authorised in the European Union, though it also remains investigational for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27283201](https://www.wikidata.org/wiki/Q27283201) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vericiguat | parent | 426.388 | C19H16F2N8O2 | DrugBank | — | Fritsch_2024, Ruehs_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:40 | 8:28 | 1/0/1 | 0/0/0 | 0/0/0 | 156,139/24,829 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.64), gpt-oss:120b (not confirmed, agreement 0.64). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Ruehs_2021_reference](drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+4 cov.) | Ruehs H et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01024-y](https://doi.org/10.1007/s40262-021-01024-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.625), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-check: partial 1/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Fritsch_2024_reference](drugs/drug_vericiguat/Vericiguat_Fritsch2024_reference.md) | — | 1-compartment (no model) | 1 | Fritsch A et al., Clinical Pharmacokinetic and Pharmacody…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01384-1](https://doi.org/10.1007/s40262-024-01384-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vericiguat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `UGT1A1` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GUCY1B1 (stimulator), GUCY2D (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Trujillo_2022.pdf` | Trujillo ME et al., Population Pharmacokinetics of Vericigu…, Clinical pharmacology and t… (2022) | popPK | 10 | [10.1002/cpt.2712](https://doi.org/10.1002/cpt.2712) | [35841202](https://pubmed.ncbi.nlm.nih.gov/35841202) | The paper describes a population PK model for vericiguat in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-06T10:32:56.880358+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Butler_2022 | irrelevant | 0 | 0 | The paper reports health-related quality of life outcomes (KCCQ scores) and clinical endpoints, not pharmacokinetic parameters. |
| popPK | Ruehs_2023 | irrelevant | 0 | 0 | The study focuses on concentration-QTc (pharmacodynamic) modeling to assess cardiac safety, not on estimating pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy trial evaluating cardiovascular outcomes and quality of life, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for vericiguat. |
| popPK | Trujillo_2022 | relevant | 10 | 0 | The paper describes a population PK model for vericiguat in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 10:33 UTC</sub>
