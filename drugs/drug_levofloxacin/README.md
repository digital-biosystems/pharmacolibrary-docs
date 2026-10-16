<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;levofloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_mean&quot;,&quot;label&quot;:&quot;Setiawan_2022_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_mean.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_median&quot;,&quot;label&quot;:&quot;Setiawan_2022_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# levofloxacin

- **generic name:** levofloxacin
- **ATC codes:** `A02BD10`, `J01MA12`, `J01RA05`, `J04AM12`, `S01AE05`
- **DrugBank:** [DB01137](https://go.drugbank.com/drugs/DB01137) · **PubChem:** [CID 149096](https://pubchem.ncbi.nlm.nih.gov/compound/149096)
- **molar mass:** 361.3675 g/mol (C18H20FN3O4) — DrugBank
- **groups:** approved, investigational

## About

Levofloxacin is a fluoroquinolone antibiotic used to treat a range of bacterial infections, including pneumonia, sinusitis, urinary tract infections, and tuberculosis, and it is also used to help eradicate Helicobacter pylori. It is widely used and appears on the WHO essential medicines list; in the European Union an authorised product exists mainly for respiratory tract infections and cystic fibrosis, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424193](https://www.wikidata.org/wiki/Q424193) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levofloxacin | parent | 361.368 | C18H20FN3O4 | DrugBank | [149096](https://pubchem.ncbi.nlm.nih.gov/compound/149096) | He_2024, Setiawan_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 10:02 | 3:52 | 2/0/1 | 0/0/0 | 0/0/0 | 38,531/12,126 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Setiawan_2022_mean](drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_mean.md) | ▶ model + simulator | 2-compartment, IV | 4 | Setiawan E et al., Population pharmacokinetics and dose op…, Scientific reports (2022) | [10.1038/s41598-022-12627-1](https://doi.org/10.1038/s41598-022-12627-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Setiawan_2022_median](drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median.md) | ▶ model + simulator | 2-compartment, IV | 4 | Setiawan E et al., Population pharmacokinetics and dose op…, Scientific reports (2022) | [10.1038/s41598-022-12627-1](https://doi.org/10.1038/s41598-022-12627-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [He_2024_reference](drugs/drug_levofloxacin/Levofloxacin_He2024_reference.md) | — | 1-compartment (no model) | 1 | He YY et al., Population pharmacokinetics and dose op…, British journal of clinical… (2024) | [10.1111/bcp.16003](https://doi.org/10.1111/bcp.16003) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levofloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate, `SLC22A4` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `SLC22A4` inhibitor, `SLCO1A2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C9` inhibitor, `SLC22A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor/substrate, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLCO4C1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 237 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2024.pdf` | He YY et al., Population pharmacokinetics and dose op…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.16003](https://doi.org/10.1111/bcp.16003) | [38317382](https://pubmed.ncbi.nlm.nih.gov/38317382) | The study reports a population PK model for levofloxacin in humans with a specific clearance value (5.26 L/h), but other parameters like volume of distribution are not explicitly listed in the provided text. |

<sub>queue written 2026-10-04T09:59:27.939956+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 09:59 UTC</sub>
