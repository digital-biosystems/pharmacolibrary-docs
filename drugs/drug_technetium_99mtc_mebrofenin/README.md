<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09D&quot;,&quot;href&quot;:&quot;atc/V09D.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) mebrofenin&quot;}]"></div>

# technetium (99mTc) mebrofenin

- **generic name:** technetium (99mTc) mebrofenin
- **ATC codes:** `V09DA04`
- **DrugBank:** [DB09137](https://go.drugbank.com/drugs/DB09137) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Technetium (99mTc) mebrofenin is a diagnostic radiopharmaceutical used for imaging of the liver and biliary system. It is an approved imaging agent used in nuclear medicine for hepatobiliary scans.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7692227](https://www.wikidata.org/wiki/Q7692227) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| technetium_99mtc_mebrofenin | metabolite | 867.428 | C30H34Br2N4O10Tc | PubChem | [172866200](https://pubchem.ncbi.nlm.nih.gov/compound/172866200) | Ali_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:31 | 3:39 | 0/1/0 | 0/0/0 | 0/0/0 | 27,985/9,259 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ali_2017_reference](drugs/drug_technetium_99mtc_mebrofenin/Technetium99mtcMebrofenin_Ali2017_reference.md) | — | 1-compartment (no model) | 2 | Ali I et al., Transporter-Mediated Alterations in Pat…, Clinical pharmacology and t… (2017) | [10.1002/cpt.997](https://doi.org/10.1002/cpt.997) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=technetium_99mtc_mebrofenin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 64 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ali_2017.pdf` | Ali I et al., Transporter-Mediated Alterations in Pat…, Clinical pharmacology and t… (2017) | popPK | 10 | [10.1002/cpt.997](https://doi.org/10.1002/cpt.997) | [29271075](https://pubmed.ncbi.nlm.nih.gov/29271075) | Human population-PK parameters including biliary clearance and central volume are reported numerically in the evidence. |
| `Ghibellini_2007.pdf` | Ghibellini G et al., In vitro-in vivo correlation of hepatob…, Clinical pharmacology and t… (2007) | popPK | 9 | [10.1038/sj.clpt.6100059](https://doi.org/10.1038/sj.clpt.6100059) | [17235333](https://pubmed.ncbi.nlm.nih.gov/17235333) | Human MEB biliary clearance values are reported numerically (7.44 in vitro and 16.1 in vivo). |
| `Kapuściński_1986.pdf` | Kapuściński J et al., Comparison in rabbits of chole-scintigr…, Nuklearmedizin. Nuclear med… (1986) | popPK | 9 | not captured | [3797258](https://pubmed.ncbi.nlm.nih.gov/3797258) | Rabbit mebrofenin disposition was assessed, but no numeric parameter values appear in the provided evidence. |
| `Kapuściński_1995.pdf` | Kapuściński J et al., Experimental toxic liver damage and hep…, International journal of oc… (1995) | popPK | 9 | not captured | [8581333](https://pubmed.ncbi.nlm.nih.gov/8581333) | Rabbit mebrofenin clearance and transfer parameters are studied, but no numeric values are provided in the evidence. |
| `Kapuściński_1993.pdf` | Kapuściński J et al., Experimental toxic liver damage and hep…, Polish journal of occupatio… (1993) | popPK | 8 | not captured | [8019202](https://pubmed.ncbi.nlm.nih.gov/8019202) | Rabbit hepatic clearance and uptake/transfer were studied, but no numeric parameter values are provided in the evidence. |
| `Kapuściński_1993_2.pdf` | Kapuściński J et al., Experimental toxic liver damage and hep…, Polish journal of occupatio… (1993) | popPK | 8 | not captured | [8219908](https://pubmed.ncbi.nlm.nih.gov/8219908) | It studies hepatic plasma clearance and transfer of 99mTc-mebrofenin in rabbits, but no numeric parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T19:30:29.868671+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kapuściński_1986 | relevant | 9 | 0 | Rabbit mebrofenin disposition was assessed, but no numeric parameter values appear in the provided evidence. |
| popPK | Kapuściński_1993 | relevant | 8 | 0 | Rabbit hepatic clearance and uptake/transfer were studied, but no numeric parameter values are provided in the evidence. |
| popPK | Kapuściński_1993_2 | relevant | 8 | 0 | It studies hepatic plasma clearance and transfer of 99mTc-mebrofenin in rabbits, but no numeric parameter values are provided in the evidence. |
| popPK | Kapuściński_1995 | relevant | 9 | 0 | Rabbit mebrofenin clearance and transfer parameters are studied, but no numeric values are provided in the evidence. |
| popPK | Kovács_2017 | irrelevant | 1 | 0 | Mebrofenin is used as a diagnostic imaging agent, and numeric values are only described in figures not provided. |
| popPK | Marie_2021 | irrelevant | 1 | 0 | The evidence is a review-style overview with no quantitative disposition parameter values. |
| popPK | McGinty_1994 | irrelevant | 2 | 1 | Mebrofenin is used as a diagnostic probe, and only relative uptake and elimination changes—not numeric disposition parameter values—are reported. |
| popPK | Mizuguchi_2014 | irrelevant | 0 | 0 | This review mentions mebrofenin scintigraphy but reports no quantitative pharmacokinetic parameters. |
| popPK | Morandi_2014 | irrelevant | 1 | 0 | This is a veterinary review and provides no numeric disposition parameters for technetium-99m mebrofenin. |
| popPK | Parker_2024 | irrelevant | 2 | 9 | Reports numeric clearance for a diagnostic liver-imaging tracer, not population-PK parameters. |
| popPK | Rassam_2017 | irrelevant | 0 | 0 | This is a review and reports no quantitative pharmacokinetic disposition parameters for technetium-99m mebrofenin. |
| popPK | Ünal_2016 | irrelevant | 0 | 0 | This review mentions mebrofenin only as an alternative imaging test and reports no quantitative pharmacokinetic values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:30 UTC</sub>
