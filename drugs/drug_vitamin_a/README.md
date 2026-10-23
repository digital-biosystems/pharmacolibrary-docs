<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;Vitamin A&quot;}]"></div>

# Vitamin A

- **generic name:** Vitamin A
- **ATC codes:** `V04CB01`
- **DrugBank:** [DB00162](https://go.drugbank.com/drugs/DB00162) · **PubChem:** [CID 445354](https://pubchem.ncbi.nlm.nih.gov/compound/445354)
- **molar mass:** 286.4516 g/mol (C20H30O) — DrugBank
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

Vitamin A (retinol) is an essential nutrient used to treat or prevent vitamin A deficiency, and it also serves as a test for fat absorption. It is widely used in human medicine and is included on the WHO list of essential medicines; it is also approved in veterinary use and available as a supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424976](https://www.wikidata.org/wiki/Q424976) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pedersen_1995_ACh](drugs/drug_vitamin_a/pd_Pedersen_1995_ACh.md) | intracellular acetylcholine levels ← all-trans-retinol (vitamin A) · direct Emax (saturable) effect | — | Pedersen WA et al., All-trans- and 9-cis-retinoic acid enha…, Journal of neurochemistry (1995) | [10.1046/j.1471-4159.1995.65010050.x](https://doi.org/10.1046/j.1471-4159.1995.65010050.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vitamin_a).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ALDH1A1 (substrate), ALDH1A2 (substrate), ALDH1A3 (substrate), APOD (target), CYP26A1 (inducer), CYP26A1 (substrate), DHRS3 (substrate), DHRS4 (substrate), LRAT (substrate), PTGDS (target), RBP1 (binder), RBP2 (binder), RBP3 (binder), RBP4 (binder), RBP5 (binder), RBP7 (binder), RDH11 (substrate), RDH12 (substrate), RDH13 (substrate), RDH14 (substrate), RDH5 (substrate), RDH8 (substrate), RETSAT (substrate), RLBP1 (binder), RXRG (binder), STRA6 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:34 | 3:17 | 0/0/0 | 1/0/0 | 0/0/0 | 120,361/3,808 | ollama / glm-5.3-flash | 5 | 3/2 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 100 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tan_2015.pdf` | Tan L et al., Vitamin A kinetics in neonatal rats vs.…, The Journal of nutrition (2015) | popPK | 8 | [10.3945/jn.114.204065](https://doi.org/10.3945/jn.114.204065) | [25540407](https://pubmed.ncbi.nlm.nih.gov/25540407) | Compartmental tracer-PK modeling of vitamin A in neonatal vs adult rats, but numeric parameter values are not shown in the abstract evidence. |
| `Green_2021.pdf` | Green MH et al., A Compartmental Model Describing the Ki…, The Journal of nutrition (2021) | popPK | 7 | [10.1093/jn/nxaa306](https://doi.org/10.1093/jn/nxaa306) | [33188397](https://pubmed.ncbi.nlm.nih.gov/33188397) | A compartmental whole-body model of β-carotene and retinol (vitamin A) kinetics in humans is presented, but the abstract reports only absorption/bioconversion fractions, not CL/V/ka values, which likely reside in figures/tables not provided. |
| `Cifelli_2007.pdf` | Cifelli CJ et al., Use of model-based compartmental analys…, Vitamins and hormones (2007) | popPK | 6 | [10.1016/S0083-6729(06)75007-5](https://doi.org/10.1016/S0083-6729(06)75007-5) | [17368316](https://pubmed.ncbi.nlm.nih.gov/17368316) | A review of compartmental PK modeling of vitamin A in rats and humans, but no numeric parameter values are present in the evidence. |
| `Lopez-Teros_2022.pdf` | Lopez-Teros V et al., Development of a Compartmental Model fo…, The Journal of nutrition (2022) | popPK | 6 | [10.1093/jn/nxac078](https://doi.org/10.1093/jn/nxac078) | [35349703](https://pubmed.ncbi.nlm.nih.gov/35349703) | A compartmental PK model of retinol kinetics in lactating/nonlactating women is developed, but the evidence only mentions assigned kinetic parameter values and TBS ranges without presenting the actual numeric CL/V/transfer parameters, which likely reside in figures/supplements. |

<sub>queue written 2026-10-07T22:32:30.383890+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cifelli_2007 | relevant | 6 | 2 | A review of compartmental PK modeling of vitamin A in rats and humans, but no numeric parameter values are present in the evidence. |
| popPK | Czuba_2024 | irrelevant | 2 | 1 | In vitro cell-culture study of retinoid metabolism/gene expression in LX-2 cells; no PK disposition parameters (CL, V, half-life with volume, or population-PK model) for vitamin A are reported. |
| popPK | Fattore_2000 | irrelevant | 0 | 0 | This is a toxicology study of dioxin effects on hepatic vitamin A levels, not a PK study of vitamin A disposition; no CL/V/ka or population-PK parameters for vitamin A are reported. |
| popPK | Green_2021 | relevant | 7 | 3 | A compartmental whole-body model of β-carotene and retinol (vitamin A) kinetics in humans is presented, but the abstract reports only absorption/bioconversion fractions, not CL/V/ka values, which likely reside in figures/tables not provided. |
| popPK | Green_2022 | irrelevant | 4 | 2 | A review of simulation-based validation of vitamin A compartmental models; no original numeric PK parameter values are reported in the evidence. |
| popPK | Lietz_2016 | irrelevant | 3 | 1 | A narrative review of isotope dilution methods with no original numeric PK parameters for vitamin A reported in the evidence. |
| popPK | Lopez-Teros_2022 | relevant | 6 | 3 | A compartmental PK model of retinol kinetics in lactating/nonlactating women is developed, but the evidence only mentions assigned kinetic parameter values and TBS ranges without presenting the actual numeric CL/V/transfer parameters, which likely reside in figures/supplements. |
| popPK | Pedersen_1995 | irrelevant | 0 | 0 | In-vitro cell culture study of retinoid effects on cholinergic markers; no pharmacokinetic disposition parameters for vitamin A. |
| popPK | Pein_2017 | irrelevant | 0 | 0 | This is a mechanistic signaling/lipidomics study with no pharmacokinetic disposition parameters for vitamin A. |
| popPK | Prom_2022 | irrelevant | 1 | 1 | This is a supplementation/transfer study of β-carotene with serum concentration measurements only; no PK disposition parameters (CL, V, half-life, or compartmental model) for vitamin A are reported. |
| popPK | Rivero-Pino_2025 | irrelevant | 0 | 0 | This is a chemical/nutritional characterization of an invasive seaweed (Rugulopteryx okamurae); retinol is only mentioned as a volatile compound, with no PK parameters for vitamin A. |
| popPK | Soprano_2000 | irrelevant | 0 | 0 | This is a receptor-binding/transactivation study of RARbeta isoforms, not a pharmacokinetic study of vitamin A disposition; no PK parameters are reported. |
| popPK | Sorg_2002 | irrelevant | 0 | 0 | This is a photobiology study of UV-induced epidermal vitamin A depletion in mice, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, half-life, or PK model). |
| popPK | Tan_2015 | relevant | 8 | 3 | Compartmental tracer-PK modeling of vitamin A in neonatal vs adult rats, but numeric parameter values are not shown in the abstract evidence. |
| popPK | Tanumihardjo_2023 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| popPK | Tippmann_2009 | irrelevant | 0 | 0 | This is a mechanistic study of retinoid effects on ADAM10 expression, not a PK study of vitamin A; no disposition parameters reported. |
| popPK | Trottier_2009 | irrelevant | 0 | 0 | In-vitro mechanistic antiviral study with no PK parameters for vitamin A. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | This is a dietary intake survey of micronutrients (including vitamin A) in Chinese children, with no pharmacokinetic parameters such as CL, V, ka, or half-life reported. |
| popPK | Yang_2022 | irrelevant | 1 | 0 | This is a mechanistic diabetes study of ATRA effects on insulin secretion; no PK disposition parameters (CL, V, half-life, compartmental model) for vitamin A/ATRA are reported, only pancreatic ATRA concentrations in figures. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
