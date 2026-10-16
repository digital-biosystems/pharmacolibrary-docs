<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;fosphenytoin&quot;}]"></div>

# fosphenytoin

- **generic name:** fosphenytoin
- **ATC codes:** `N03AB05`
- **DrugBank:** [DB01320](https://go.drugbank.com/drugs/DB01320) · **PubChem:** [CID 56339](https://pubchem.ncbi.nlm.nih.gov/compound/56339)
- **molar mass:** 362.2739 g/mol (C16H15N2O6P) — DrugBank
- **groups:** approved, investigational

## About

Fosphenytoin is an anticonvulsant used to treat epilepsy, including status epilepticus. It is an approved medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5473363](https://www.wikidata.org/wiki/Q5473363) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosphenytoin | parent | 362.274 | C16H15N2O6P | DrugBank | [56339](https://pubchem.ncbi.nlm.nih.gov/compound/56339) | Higuchi_2019, Tanaka_2013 |
| phenytoin | metabolite | 252.273 | C15H12N2O2 | PubChem | [1775](https://pubchem.ncbi.nlm.nih.gov/compound/1775) | Higuchi_2019, Tanaka_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:10 | 1:51 | 0/7/1 | 0/1/0 | 0/0/0 | 97,408/8,019 | einfracz / qwen3.8-27b | 17 | 14/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.938), gpt-oss:120b (not confirmed, agreement 0.882). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q77 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Tanaka_2013_reference](drugs/drug_fosphenytoin/Fosphenytoin_Tanaka2013_reference.md) | — | 1-compartment (no model) | 6 | Tanaka J et al., Population pharmacokinetics of phenytoi…, European journal of clinica… (2013) | [10.1007/s00228-012-1373-8](https://doi.org/10.1007/s00228-012-1373-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ahn_2008_reference](drugs/drug_fosphenytoin/Fosphenytoin_Ahn2008_reference.md) | — | 1-compartment (no model) | 0 | Ahn JE et al., Phenytoin half-life and clearance durin…, Neurology (2008) | [10.1212/01.wnl.0000316392.55784.57](https://doi.org/10.1212/01.wnl.0000316392.55784.57) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.667). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Coles_2015_reference](drugs/drug_fosphenytoin/Fosphenytoin_Coles2015_reference.md) | — | 1-compartment (no model) | 0 | Coles LD et al., Use of IV fosphenytoin pharmacokinetics…, Epilepsia (2015) | [10.1111/epi.12961](https://doi.org/10.1111/epi.12961) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Empey_2013_reference](drugs/drug_fosphenytoin/Fosphenytoin_Empey2013_reference.md) | — | 1-compartment (no model) | 0 | Empey PE et al., Therapeutic hypothermia decreases pheny…, Critical care medicine (2013) | [10.1097/CCM.0b013e318292316c](https://doi.org/10.1097/CCM.0b013e318292316c) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Higuchi_2019_reference](drugs/drug_fosphenytoin/Fosphenytoin_Higuchi2019_reference.md) | — | general linear (no model) | 0 | Higuchi K et al., Population Pharmacokinetic Analysis of…, Therapeutic drug monitoring (2019) | [10.1097/FTD.0000000000000651](https://doi.org/10.1097/FTD.0000000000000651) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.286). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Moffett_2018_reference](drugs/drug_fosphenytoin/Fosphenytoin_Moffett2018_reference.md) | — | 1-compartment (no model) | 0 | Moffett BS et al., Fosphenytoin Population Pharmacokinetic…, Pediatric critical care med… (2018) | [10.1097/PCC.0000000000001627](https://doi.org/10.1097/PCC.0000000000001627) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ohno_2018_reference](drugs/drug_fosphenytoin/Fosphenytoin_Ohno2018_reference.md) | — | 1-compartment (no model) | 0 | Ohno Y et al., Time-Dependent Decline in Serum Phenyto…, Therapeutic drug monitoring (2018) | [10.1097/FTD.0000000000000521](https://doi.org/10.1097/FTD.0000000000000521) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wainwright_2018_reference](drugs/drug_fosphenytoin/Fosphenytoin_Wainwright2018_reference.md) | — | parent + metabolite (no model) | 0 | MDMarkSWainwright Department of Neurology Division of Pediatric Neurology University of Washington Seattle Children's Hospital Seattle WA, Fat, Pharmacokinetics, and Fosphenytoin… (2018) | [10.1097/PCC.0000000000001647](https://doi.org/10.1097/PCC.0000000000001647) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Wheless_1998_side_effects](drugs/drug_fosphenytoin/pd_Wheless_1998_side_effects.md) | side effects ← fosphenytoin · inhibition effect | — | Wheless JW, Pediatric use of intravenous and intram…, Journal of child neurology… (1998) | [10.1177/0883073898013001041](https://doi.org/10.1177/0883073898013001041) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fosphenytoin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2B6` inducer, `CYP2C19` substrate, `CYP2C9` inducer/substrate, `CYP3A4` inducer/substrate, `UGT1A6` inhibitor, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `UGT1A6` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SCN5A (inhibitor), SERPINA7 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 19 returned
- **screened:** 22  ·  **relevant:** 4
- **records:** 8  ·  extracted 0  ·  needs_review 1  ·  rejected 7  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Higuchi_2019.pdf` | Higuchi K et al., Population Pharmacokinetic Analysis of…, Therapeutic drug monitoring (2019) | popPK | 10 | [10.1097/FTD.0000000000000651](https://doi.org/10.1097/FTD.0000000000000651) | [31095070](https://pubmed.ncbi.nlm.nih.gov/31095070) | The study provides a population PK model for fosphenytoin (via its active metabolite phenytoin) with a clear equation for Clearance (CL) involving age and body weight, though specific volume or half-life values are not explicitly isolated in the text. |
| `Moffett_2018.pdf` | Moffett BS et al., Fosphenytoin Population Pharmacokinetic…, Pediatric critical care med… (2018) | popPK | 10 | [10.1097/PCC.0000000000001627](https://doi.org/10.1097/PCC.0000000000001627) | [29927880](https://pubmed.ncbi.nlm.nih.gov/29927880) | The paper describes a population PK model for fosphenytoin but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, likely residing in tables or figures not included. |
| `Coles_2015.pdf` | Coles LD et al., Use of IV fosphenytoin pharmacokinetics…, Epilepsia (2015) | popPK | 9 | [10.1111/epi.12961](https://doi.org/10.1111/epi.12961) | [25952988](https://pubmed.ncbi.nlm.nih.gov/25952988) | Study reports quantitative PK parameters (half-lives) for fosphenytoin/phenytoin in dogs, though specific values for CL and V are not explicitly listed in the provided text. |
| `Empey_2013.pdf` | Empey PE et al., Therapeutic hypothermia decreases pheny…, Critical care medicine (2013) | popPK | 8 | [10.1097/CCM.0b013e318292316c](https://doi.org/10.1097/CCM.0b013e318292316c) | [23896831](https://pubmed.ncbi.nlm.nih.gov/23896831) | The study is a pharmacokinetic analysis of fosphenytoin in humans that reports quantitative parameters (specifically the change in Vmax) for the subject drug. |

<sub>queue written 2026-10-14T19:08:48.338954+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2008 | irrelevant | 2 | 0 | The study investigates the pharmacokinetics of the parent drug phenytoin, using fosphenytoin only as a route of administration for the stable-labeled tracer, and does not report specific disposition parameters (CL, V, etc.) for fosphenytoin itself. |
| popPK | Hagos_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fentanyl, with fosphenytoin serving only as a co-administered inducer (covariate) rather than the subject drug. |
| popPK | Kapoor_2013 | irrelevant | 1 | 0 | The study is an in vitro investigation of a prodrug/enzyme system using MDCK cells and does not report in vivo population pharmacokinetic parameters (CL, V, t1/2) for fosphenytoin in a biological species. |
| popPK | Moffett_2018 | relevant | 10 | 2 | The paper describes a population PK model for fosphenytoin but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, likely residing in tables or figures not included. |
| popPK | Noro_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for trigeminal neuralgia that measures plasma phenytoin concentrations for exposure-response analysis but does not report quantitative PK parameters (CL, V, etc.) or a PK model. |
| popPK | Ohno_2018 | relevant | 4 | 0 | The study reports qualitative PK trends (increasing clearance) and dose simulations for fosphenytoin, but specific quantitative parameter values (CL, V, etc.) are not explicitly provided in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:08 UTC</sub>
