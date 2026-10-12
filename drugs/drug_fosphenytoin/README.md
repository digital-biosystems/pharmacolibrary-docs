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
| 2026-10-07 06:55 | 1:26 | 0/6/2 | 0/0/0 | 0/0/0 | 124,293/8,592 | einfracz / qwen3.8-27b | 17 | 14/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Higuchi_2019_reference](drugs/drug_fosphenytoin/Fosphenytoin_Higuchi2019_reference.md) | — | 1-compartment (no model) | 1 | Higuchi K et al., Population Pharmacokinetic Analysis of…, Therapeutic drug monitoring (2019) | [10.1097/FTD.0000000000000651](https://doi.org/10.1097/FTD.0000000000000651) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.938), gpt-oss:120b (not confirmed, agreement 0.882). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q77 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Tanaka_2013_reference](drugs/drug_fosphenytoin/Fosphenytoin_Tanaka2013_reference.md) | — | 1-compartment (no model) | 6 | Tanaka J et al., Population pharmacokinetics of phenytoi…, European journal of clinica… (2013) | [10.1007/s00228-012-1373-8](https://doi.org/10.1007/s00228-012-1373-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ahn_2008_reference](drugs/drug_fosphenytoin/Fosphenytoin_Ahn2008_reference.md) | — | 1-compartment (no model) | 0 | Ahn JE et al., Phenytoin half-life and clearance durin…, Neurology (2008) | [10.1212/01.wnl.0000316392.55784.57](https://doi.org/10.1212/01.wnl.0000316392.55784.57) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Coles_2015_reference](drugs/drug_fosphenytoin/Fosphenytoin_Coles2015_reference.md) | — | 1-compartment (no model) | 0 | Coles LD et al., Use of IV fosphenytoin pharmacokinetics…, Epilepsia (2015) | [10.1111/epi.12961](https://doi.org/10.1111/epi.12961) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Empey_2013_reference](drugs/drug_fosphenytoin/Fosphenytoin_Empey2013_reference.md) | — | 1-compartment (no model) | 0 | Empey PE et al., Therapeutic hypothermia decreases pheny…, Critical care medicine (2013) | [10.1097/CCM.0b013e318292316c](https://doi.org/10.1097/CCM.0b013e318292316c) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.286). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Moffett_2018_reference](drugs/drug_fosphenytoin/Fosphenytoin_Moffett2018_reference.md) | — | 1-compartment (no model) | 0 | Moffett BS et al., Fosphenytoin Population Pharmacokinetic…, Pediatric critical care med… (2018) | [10.1097/PCC.0000000000001627](https://doi.org/10.1097/PCC.0000000000001627) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ohno_2018_reference](drugs/drug_fosphenytoin/Fosphenytoin_Ohno2018_reference.md) | — | 1-compartment (no model) | 0 | Ohno Y et al., Time-Dependent Decline in Serum Phenyto…, Therapeutic drug monitoring (2018) | [10.1097/FTD.0000000000000521](https://doi.org/10.1097/FTD.0000000000000521) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wainwright_2018_reference](drugs/drug_fosphenytoin/Fosphenytoin_Wainwright2018_reference.md) | — | parent + metabolite (no model) | 0 | MDMarkSWainwright Department of Neurology Division of Pediatric Neurology University of Washington Seattle Children's Hospital Seattle WA, Fat, Pharmacokinetics, and Fosphenytoin… (2018) | [10.1097/PCC.0000000000001647](https://doi.org/10.1097/PCC.0000000000001647) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fosphenytoin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2B6` inducer, `CYP2C19` substrate, `CYP2C9` inducer/substrate, `CYP3A4` inducer/substrate, `UGT1A6` inhibitor, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `UGT1A6` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SCN5A (inhibitor), SERPINA7 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 19 returned
- **screened:** 22  ·  **relevant:** 3
- **records:** 8  ·  extracted 0  ·  needs_review 2  ·  rejected 6  ·  stale 6
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Higuchi_2019.pdf` | Higuchi K et al., Population Pharmacokinetic Analysis of…, Therapeutic drug monitoring (2019) | popPK | 10 | [10.1097/FTD.0000000000000651](https://doi.org/10.1097/FTD.0000000000000651) | [31095070](https://pubmed.ncbi.nlm.nih.gov/31095070) | The study reports a PPK model for phenytoin following fosphenytoin administration with a specific clearance equation, though the exact base value for CL is implied by the normalization (1.99) rather than stated as a raw population parameter directly. |
| `Moffett_2018.pdf` | Moffett BS et al., Fosphenytoin Population Pharmacokinetic…, Pediatric critical care med… (2018) | popPK | 10 | [10.1097/PCC.0000000000001627](https://doi.org/10.1097/PCC.0000000000001627) | [29927880](https://pubmed.ncbi.nlm.nih.gov/29927880) | The study describes a population PK model for fosphenytoin in pediatric patients, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided evidence. |
| `Ahn_2008.pdf` | Ahn JE et al., Phenytoin half-life and clearance durin…, Neurology (2008) | popPK | 9 | [10.1212/01.wnl.0000316392.55784.57](https://doi.org/10.1212/01.wnl.0000316392.55784.57) | [18591503](https://pubmed.ncbi.nlm.nih.gov/18591503) | The study reports population pharmacokinetic parameters (half-life, clearance, volume) for phenytoin, the active metabolite of fosphenytoin, in humans. |
| `Empey_2013.pdf` | Empey PE et al., Therapeutic hypothermia decreases pheny…, Critical care medicine (2013) | popPK | 9 | [10.1097/CCM.0b013e318292316c](https://doi.org/10.1097/CCM.0b013e318292316c) | [23896831](https://pubmed.ncbi.nlm.nih.gov/23896831) | The study reports population PK model results for phenytoin (the active metabolite of fosphenytoin) in children, but specific numeric values for clearance, volume, or other disposition parameters are not explicitly listed in the provided evidence. |
| `Ohno_2018.pdf` | Ohno Y et al., Time-Dependent Decline in Serum Phenyto…, Therapeutic drug monitoring (2018) | popPK | 8 | [10.1097/FTD.0000000000000521](https://doi.org/10.1097/FTD.0000000000000521) | [29683874](https://pubmed.ncbi.nlm.nih.gov/29683874) | The study reports individual pharmacokinetic parameters (clearance) derived via Bayesian estimation, but the specific numeric values for clearance or volume are not explicitly listed in the text provided, only implied through dose calculations and descriptions of trends. |
| `Coles_2015.pdf` | Coles LD et al., Use of IV fosphenytoin pharmacokinetics…, Epilepsia (2015) | popPK | 6 | [10.1111/epi.12961](https://doi.org/10.1111/epi.12961) | [25952988](https://pubmed.ncbi.nlm.nih.gov/25952988) | The study reports non-compartmental PK parameters and a two-compartment model for fosphenytoin in dogs, but specific numeric values for clearance (CL), volume (V), and half-lives are not fully enumerated in the provided text (half-lives are given as ranges/approximations). |

<sub>queue written 2026-10-07T06:53:57.995892+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coles_2015 | relevant | 6 | 2 | The study reports non-compartmental PK parameters and a two-compartment model for fosphenytoin in dogs, but specific numeric values for clearance (CL), volume (V), and half-lives are not fully enumerated in the provided text (half-lives are given as ranges/approximations). |
| popPK | Empey_2013 | relevant | 9 | 2 | The study reports population PK model results for phenytoin (the active metabolite of fosphenytoin) in children, but specific numeric values for clearance, volume, or other disposition parameters are not explicitly listed in the provided evidence. |
| popPK | Hagos_2019 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of fentanyl, with fosphenytoin serving only as a concomitant drug (inducer) affecting fentanyl clearance, not as the subject drug. |
| popPK | Kapoor_2013 | irrelevant | 2 | 2 | The study is in vitro using Madin-Darby cell monolayers to measure permeation rates and conversion kinetics, not in vivo population pharmacokinetic parameters (CL, Vd) for the drug. |
| popPK | Moffett_2018 | relevant | 10 | 0 | The study describes a population PK model for fosphenytoin in pediatric patients, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided evidence. |
| popPK | Noro_2026 | irrelevant | 1 | 0 | This is a clinical efficacy trial for trigeminal neuralgia that reports only plasma concentration time-points (Cmax levels) without deriving or reporting any pharmacokinetic parameters (CL, V, Ka, t1/2) or compartmental models. |
| popPK | Ohno_2018 | relevant | 8 | 4 | The study reports individual pharmacokinetic parameters (clearance) derived via Bayesian estimation, but the specific numeric values for clearance or volume are not explicitly listed in the text provided, only implied through dose calculations and descriptions of trends. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:54 UTC</sub>
