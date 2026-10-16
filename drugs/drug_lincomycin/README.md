<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;lincomycin&quot;}]"></div>

# lincomycin

- **generic name:** lincomycin
- **ATC codes:** `J01FF02`
- **DrugBank:** [DB01627](https://go.drugbank.com/drugs/DB01627) · **PubChem:** [CID 3000540](https://pubchem.ncbi.nlm.nih.gov/compound/3000540)
- **molar mass:** 406.54 g/mol (C18H34N2O6S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Lincomycin is a lincosamide antibiotic used to treat staphylococcal and pneumococcal infections. It is an approved human and veterinary medicine, though it carries a boxed warning, and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423428](https://www.wikidata.org/wiki/Q423428) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lincomycin | parent | 406.54 | C18H34N2O6S | DrugBank | [3000540](https://pubchem.ncbi.nlm.nih.gov/compound/3000540) | Adam_1979, Sreeshitha_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:16 | 6:30 | 0/1/1 | 1/0/0 | 0/0/0 | 289,366/28,781 | einfracz / qwen3.8-27b | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Adam_1979_reference](drugs/drug_lincomycin/Lincomycin_Adam1979_reference.md) | — | 1-compartment (no model) | 3 | Adam D et al., [Serum concentration and kinetics after…, Arzneimittel-Forschung (1979) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Sreeshitha_2014_reference](drugs/drug_lincomycin/Lincomycin_Sreeshitha2014_reference.md) | — | 1-compartment (no model) | 4 | Sreeshitha Gouri S et al., Pharmacokinetics of lincomycin followin…, Tropical animal health and… (2014) | [10.1007/s11250-014-0595-4](https://doi.org/10.1007/s11250-014-0595-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Guo_2016_3_gross_photosynthesis_oxygen_evolution_rate](drugs/drug_lincomycin/pd_Guo_2016_3_gross_photosynthesis_oxygen_evolution_rate.md) | gross photosynthesis (oxygen evolution rate) ← lincomycin · direct sigmoid Emax (Hill) effect | — | Guo J et al., Effects of Antibiotics on the Growth an…, Archives of environmental c… (2016) | [10.1007/s00244-016-0305-5](https://doi.org/10.1007/s00244-016-0305-5) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Guo_2016_3_growth_cell_density](drugs/drug_lincomycin/pd_Guo_2016_3_growth_cell_density.md) | growth (cell density) ← lincomycin · direct sigmoid Emax (Hill) effect | — | Guo J et al., Effects of Antibiotics on the Growth an…, Archives of environmental c… (2016) | [10.1007/s00244-016-0305-5](https://doi.org/10.1007/s00244-016-0305-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lincomycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ORM1` binder | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 9  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Adam_1979.pdf` | Adam D et al., [Serum concentration and kinetics after…, Arzneimittel-Forschung (1979) | popPK | 10 | not captured | [582106](https://pubmed.ncbi.nlm.nih.gov/582106) | The abstract contains explicit quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance, AUC) for lincomycin in humans. |
| `Sreeshitha_2014.pdf` | Sreeshitha Gouri S et al., Pharmacokinetics of lincomycin followin…, Tropical animal health and… (2014) | popPK | 10 | [10.1007/s11250-014-0595-4](https://doi.org/10.1007/s11250-014-0595-4) | [24792222](https://pubmed.ncbi.nlm.nih.gov/24792222) | The study reports quantitative pharmacokinetic parameters (Vd, half-life, etc.) for lincomycin in buffalo calves, with all numeric values clearly presented in the evidence. |
| `Koroleva_1977.pdf` | Koroleva VG et al., [Optimal regime of intravenous administ…, Antibiotiki (1977) | popPK | 9 | not captured | [883786](https://pubmed.ncbi.nlm.nih.gov/883786) | Study reports a two-compartment model for lincomycin in humans and provides specific dosing rates derived from PK constants, but explicit CL, V, or t1/2 values are not listed in the provided text. |

<sub>queue written 2026-10-13T11:11:07.981283+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guo_2016 | irrelevant | 0 | 0 | The paper reports ecotoxicity data (EC50 values) for lincomycin on algae, not pharmacokinetic disposition parameters. |
| popPK | Guo_2016_2 | irrelevant | 0 | 0 | The paper reports ecotoxicity data (EC50) for aquatic organisms, not pharmacokinetic disposition parameters. |
| popPK | Guo_2016_3 | irrelevant | 0 | 0 | The study is an ecotoxicological assessment of antibiotic effects on algal growth and physiology, not a pharmacokinetic study, and reports no disposition parameters like clearance or volume. |
| popPK | Huang_2020 | irrelevant | 0 | 0 | The study focuses on the PK/PD of tilmicosin; lincomycin is only tested as a comparator for MIC susceptibility, with no pharmacokinetic data provided for it. |
| popPK | Koroleva_1977 | relevant | 9 | 4 | Study reports a two-compartment model for lincomycin in humans and provides specific dosing rates derived from PK constants, but explicit CL, V, or t1/2 values are not listed in the provided text. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study focuses on the environmental fate (soil sorption/mobility) and ecotoxicity (LC50/EC50) of lincomycin, not its pharmacokinetic disposition parameters. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifaximin, with lincomycin used only as a clinical comparator for efficacy (cure rates) and no PK parameters are reported for lincomycin. |
| popPK | Zheng_2024 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for the subject drug NZX (antibacterial peptide), using lincomycin only as a comparator agent. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-13 11:11 UTC</sub>
