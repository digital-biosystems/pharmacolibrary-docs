<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;granisetron&quot;}]"></div>

# granisetron

- **generic name:** granisetron
- **ATC codes:** `A04AA02`
- **DrugBank:** [DB00889](https://go.drugbank.com/drugs/DB00889) · **PubChem:** [CID 5284566](https://pubchem.ncbi.nlm.nih.gov/compound/5284566)
- **molar mass:** 312.417 g/mol (C18H24N4O) — DrugBank
- **groups:** approved, investigational

## About

Granisetron is an antiemetic used to prevent nausea and vomiting, especially in people receiving cancer treatment. It is an approved medicine and remains authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q596708](https://www.wikidata.org/wiki/Q596708) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| granisetron | parent | 312.417 | C18H24N4O | DrugBank | [5284566](https://pubchem.ncbi.nlm.nih.gov/compound/5284566) | Addelman_1990, Howell_2009, Li_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:59 | 5:03 | 0/2/1 | 0/0/0 | 0/0/0 | 70,339/16,262 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Addelman_1990_reference](drugs/drug_granisetron/Granisetron_Addelman1990_reference.md) | — | 1-compartment (no model) | 2 | Addelman M et al., Phase I/II trial of granisetron: a nove…, Journal of clinical oncolog… (1990) | [10.1200/JCO.1990.8.2.337](https://doi.org/10.1200/JCO.1990.8.2.337) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Howell_2009_reference](drugs/drug_granisetron/Granisetron_Howell2009_reference.md) | — | 1-compartment (no model) | 3 | Howell J et al., Pharmacokinetics of a granisetron trans…, Journal of oncology pharmac… (2009) | [10.1177/1078155209104063](https://doi.org/10.1177/1078155209104063) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Li_2023_reference](drugs/drug_granisetron/Granisetron_Li2023_reference.md) | — | 1-compartment (no model) | 3 | Li J et al., Population pharmacokinetic analysis of…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1154026](https://doi.org/10.3389/fphar.2023.1154026) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=granisetron).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: HTR3A (target), HTR3B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 18 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Addelman_1990.pdf` | Addelman M et al., Phase I/II trial of granisetron: a nove…, Journal of clinical oncolog… (1990) | popPK | 10 | [10.1200/JCO.1990.8.2.337](https://doi.org/10.1200/JCO.1990.8.2.337) | [2153767](https://pubmed.ncbi.nlm.nih.gov/2153767) | The abstract reports quantitative pharmacokinetic parameters including AUC and total body clearance for granisetron in a two-compartment model. |
| `Howell_2009.pdf` | Howell J et al., Pharmacokinetics of a granisetron trans…, Journal of oncology pharmac… (2009) | popPK | 10 | [10.1177/1078155209104063](https://doi.org/10.1177/1078155209104063) | [19304880](https://pubmed.ncbi.nlm.nih.gov/19304880) | The study reports quantitative PK parameters (Cmax, t1/2, AUC, Cavg) for granisetron in humans, though specific clearance (CL) and volume (V) values are not explicitly listed in the text provided. |

<sub>queue written 2026-10-04T13:55:16.865902+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Artaiz_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of VA21B7, using granisetron only as a comparator agent in behavioral tests, with no pharmacokinetic data reported. |
| popPK | Jarvis_2016 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT3 receptor inhibition by essential oils, where granisetron is used only as a radioligand for binding assays, not as the subject of a pharmacokinetic study. |
| popPK | Shingaki_2016 | irrelevant | 1 | 0 | Granisetron is used as a comparator antiemetic to assess gastrointestinal motility via FDG-PET, not as the subject of a pharmacokinetic parameter study. |
| popPK | Thompson_2024 | irrelevant | 0 | 0 | The study models the pharmacokinetics of cisplatin (platinum), not granisetron, which is only a co-administered antiemetic. |
| PD | Thompson_2024 | not_relevant | 0 | 0 | The paper reports a PK/PD model for cisplatin nephrotoxicity, not for granisetron; granisetron is only mentioned as a covariate (antiemetic type) affecting cisplatin PK parameters. |
| popPK | Thompson_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of cisplatin (platinum), not granisetron, which is only a co-administered antiemetic. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 13:55 UTC</sub>
