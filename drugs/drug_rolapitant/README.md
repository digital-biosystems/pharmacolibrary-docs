<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;rolapitant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rolapitant_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rolapitant/Rolapitant_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# rolapitant

- **generic name:** rolapitant
- **ATC codes:** `A04AD14`
- **DrugBank:** [DB09291](https://go.drugbank.com/drugs/DB09291) · **PubChem:** [CID 10311306](https://pubchem.ncbi.nlm.nih.gov/compound/10311306)
- **molar mass:** 500.485 g/mol (C25H26F6N2O2) — DrugBank
- **groups:** approved, investigational

## About

Rolapitant is an antiemetic used to prevent nausea and vomiting associated with cancer treatment. It has been approved as a medicine, though its marketing authorisation in the European Union has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76415423](https://www.wikidata.org/wiki/Q76415423) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rolapitant | parent | 500.485 | C25H26F6N2O2 | DrugBank | [10311306](https://pubchem.ncbi.nlm.nih.gov/compound/10311306) | Li_2026, Wang_2019 |
| fosrolapitant | metabolite | 654.497 | C27H29F6N2O8P | PubChem | [163871173](https://pubchem.ncbi.nlm.nih.gov/compound/163871173) | Li_2026 |
| M19 | metabolite | 516.482 | C25H26F6N2O3 | PubChem | [135390916](https://pubchem.ncbi.nlm.nih.gov/compound/135390916) | Wang_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:44 | 8:54 | 0/1/4 | 0/0/0 | 0/0/0 | 117,590/29,684 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0), gpt-oss:120b (not confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Li_2026_fosrolapitant](drugs/drug_rolapitant/Rolapitant_Li2026_fosrolapitant.md) | held back | 1-compartment, oral | 6 | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Li_2026_healthy_control](drugs/drug_rolapitant/Rolapitant_Li2026_healthy_control.md) | — | parent + metabolite (no model) | 5 | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Li_2026_moderate_hepatic_impairment](drugs/drug_rolapitant/Rolapitant_Li2026_moderate_hepatic_impairment.md) | — | parent + metabolite (no model) | 5 | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0), gpt-oss:120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Li_2026_rolapitant](drugs/drug_rolapitant/Rolapitant_Li2026_rolapitant.md) | — | parent + metabolite (no model) | 5 | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778), gpt-oss:120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Wang_2019_reference](drugs/drug_rolapitant/Rolapitant_Wang2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Wang X et al., Population Pharmacokinetics of Rolapita…, Clinical pharmacology in dr… (2019) | [10.1002/cpdd.733](https://doi.org/10.1002/cpdd.733) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 0  ·  needs_review 4  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2019.pdf` | Wang X et al., Population Pharmacokinetics of Rolapita…, Clinical pharmacology in dr… (2019) | popPK | 10 | [10.1002/cpdd.733](https://doi.org/10.1002/cpdd.733) | [31418538](https://pubmed.ncbi.nlm.nih.gov/31418538) | The paper reports a population pharmacokinetic model for rolapitant with specific numeric values for clearance, volume of distribution, and intercompartmental clearance provided in the text. |
| `Yu_2017.pdf` | Yu J et al., What Can Be Learned from Recent New Dru…, Drug metabolism and disposi… (2017) | pgx | 8 | [10.1124/dmd.116.073411](https://doi.org/10.1124/dmd.116.073411) | [27821435](https://www.ncbi.nlm.nih.gov/pubmed/27821435) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-04T14:35:58.375196+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Barbour_2017 | not_relevant | 0 | 0 | The paper analyzes safety outcomes (adverse events) regarding drug-drug interactions with CYP2D6/BCRP substrates, but does not report pharmacokinetic or pharmacodynamic parameters of rolapitant itself, nor does it stratify by patient genotype. |
| PGx | Davis_2016 | not_relevant | 0 | 0 | The text is a general review of antiemetic therapies and mentions rolapitant's pharmacokinetic properties (half-life, CYP-3A4) but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Deb_2023 | irrelevant | 0 | 0 | The study is an in silico simulation of drug-drug interactions and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for rolapitant. |
| PD | Deb_2023 | not_relevant | 0 | 0 | The paper is an in silico simulation of drug-drug interactions (DDI) focusing on CYP enzyme kinetics (IC50, Ki) and PK parameters (AUC ratios), not pharmacodynamic (PD) exposure-response or dose-response relationships for rolapitant. |
| PGx | Deb_2023 | not_relevant | 0 | 0 | The paper reports in silico drug-drug interaction simulations, not pharmacogenomic effects of gene variants on rolapitant PK/PD. |
| PGx | Glass_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP2D6 inhibition by rolapitant (drug-drug interaction) but does not report any pharmacogenomic effects (gene variants) on rolapitant's PK or PD parameters. |
| PGx | Heo_2017 | not_relevant | 0 | 0 | The paper is a clinical review of rolapitant's efficacy and safety, focusing on its lack of CYP3A4 interactions, but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Rapoport_2017 | not_relevant | 0 | 0 | The paper reports clinical efficacy subanalyses by cancer type and age, but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Rapoport_2017_2 | not_relevant | 0 | 0 | The paper is a review of delayed CINV management and mentions rolapitant's lack of CYP3A4 interaction, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Rapoport_2017_3 | not_relevant | 0 | 0 | The paper is a clinical review of rolapitant's efficacy and safety, with no mention of genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Rapoport_2017_4 | not_relevant | 0 | 0 | The paper is a general review of NK-1 receptor antagonists and does not report any pharmacogenomic effects or gene variant associations for rolapitant. |
| PGx | Syed_2015 | not_relevant | 0 | 0 | The paper is a drug approval summary that discusses general pharmacokinetic properties (half-life, CYP3A4 interaction) but does not report any pharmacogenomic effects or genotype-specific PK/PD parameters. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The study evaluates the effect of rolapitant on the pharmacokinetics of probe drugs (drug-drug interaction) in healthy subjects, not the effect of a gene variant on rolapitant's pharmacokinetics or pharmacodynamics. |
| PGx | Wang_2019_2 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole, rifampin, midazolam) rather than pharmacogenomic effects based on genetic variants. |
| PGx | Wang_2019_3 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (CYP inhibition) in healthy subjects without stratifying by genotype or reporting pharmacogenomic effects. |
| PGx | Yu_2017 | not_relevant | 0 | 0 | The paper is a systematic review of 2015 NDAs and mentions rolapitant only as a perpetrator of CYP2D6 inhibition, without reporting any pharmacogenomic effects on rolapitant's own PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 14:36 UTC</sub>
