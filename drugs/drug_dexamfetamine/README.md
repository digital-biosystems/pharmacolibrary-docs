<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;dexamfetamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexamfetamine_Roberts2015_final_final_plasma_model&quot;,&quot;label&quot;:&quot;Roberts_2015_final_final_plasma_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# dexamfetamine

- **generic name:** dexamfetamine
- **ATC codes:** `N06BA02`
- **DrugBank:** [DB01576](https://go.drugbank.com/drugs/DB01576) · **PubChem:** not captured
- **groups:** approved, illicit, investigational

## About

Dexamfetamine is a stimulant medicine used to treat attention deficit hyperactivity disorder and narcolepsy. It is an approved drug used widely for these conditions, though it is a controlled stimulant carrying a boxed warning and is also used illicitly.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1706418](https://www.wikidata.org/wiki/Q1706418) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dexamfetamine (dextroamphetamine) | parent | 135.21 | C9H13N | PubChem | [5826](https://pubchem.ncbi.nlm.nih.gov/compound/5826) | Roberts_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:26 | 1:16 | 0/1/1 | 0/1/0 | 0/0/0 | 84,314/4,170 | ollama / glm-5.3-flash | 4 | 0/4 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Roberts_2015_final_final_plasma_model](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md) | ▶ model + simulator | 1-compartment, oral | 4 | Roberts JK et al., A Population Pharmacokinetic Analysis o…, Clinical drug investigation (2015) | [10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Roberts_2015_final](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final.md) | — | 2-compartment (no model) | 5 | Roberts JK et al., A Population Pharmacokinetic Analysis o…, Clinical drug investigation (2015) | [10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2019_DA](drugs/drug_dexamfetamine/pd_van_2019_DA.md) | extracellular striatal dopamine biomarker turnover ← d-amphetamine (brain extracellular fluid) | — | van Gaalen MM et al., Development of a Semimechanistic Pharma…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.254508](https://doi.org/10.1124/jpet.118.254508) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dexamfetamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (inducer), ADRA1A (inhibitor), ADRA1B (target), SLC18A2 (inducer), SLC6A2 (negative modulator), SLC6A3 (negative modulator), SLC6A3 (unknown), TAAR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `van_2019.pdf` | van Gaalen MM et al., Development of a Semimechanistic Pharma…, The Journal of pharmacology… (2019) | popPK | 8 | [10.1124/jpet.118.254508](https://doi.org/10.1124/jpet.118.254508) | [30733244](https://pubmed.ncbi.nlm.nih.gov/30733244) | Population PK of dexamfetamine in plasma/brain ECF is the subject, but no numeric parameter values appear in the provided evidence (likely in tables/figures not included). |

<sub>queue written 2026-10-07T00:25:49.507735+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aljabasini_2025 | irrelevant | 0 | 0 | This is a zebrafish toxicity study of MDPV; dextroamphetamine is only a reference compound for PPI validation, and no PK disposition parameters (CL, V, ka, half-life) for dexamfetamine are reported. |
| popPK | Aumann_2025 | irrelevant | 0 | 0 | PET/behavioral study using dexamfetamine as a pharmacological challenge probe; no PK parameters (CL, V, ka, half-life) reported. |
| popPK | Fudala_1990 | irrelevant | 0 | 0 | Behavioral conditioning study in rats with no pharmacokinetic parameters reported. |
| popPK | McElroy_2015 | irrelevant | 0 | 0 | Efficacy/safety trial of lisdexamfetamine with no PK parameters reported. |
| popPK | Overholtzer_2026 | irrelevant | 0 | 0 | This is a neuroimaging study of ADHD medication effects on brain structure, with no pharmacokinetic parameters for dexamfetamine reported. |
| popPK | van_2019 | relevant | 8 | 2 | Population PK of dexamfetamine in plasma/brain ECF is the subject, but no numeric parameter values appear in the provided evidence (likely in tables/figures not included). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:25 UTC</sub>
