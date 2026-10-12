<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;galantamine&quot;}]"></div>

# galantamine

- **generic name:** galantamine
- **ATC codes:** `N06DA04`
- **DrugBank:** [DB00674](https://go.drugbank.com/drugs/DB00674) · **PubChem:** [CID 9651](https://pubchem.ncbi.nlm.nih.gov/compound/9651)
- **molar mass:** 287.3535 g/mol (C17H21NO3) — DrugBank
- **groups:** approved, investigational

## About

Galantamine is an acetylcholinesterase inhibitor used to treat Alzheimer's disease and other forms of dementia. It is an approved medicine, widely used for these conditions, and has also been investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412690](https://www.wikidata.org/wiki/Q412690) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| galantamine | parent | 287.353 | C17H21NO3 | DrugBank | [9651](https://pubchem.ncbi.nlm.nih.gov/compound/9651) | Mihailova_1986, Piotrovsky_2003 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:02 | 6:04 | 0/2/0 | 0/0/0 | 0/0/0 | 364,784/25,381 | ollama / glm-5.3-flash | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Mihailova_1986_reference](drugs/drug_galantamine/Galantamine_Mihailova1986_reference.md) | — | 1-compartment (no model) | 0 | Mihailova D et al., Pharmacokinetics of galanthamine hydrob…, Pharmacology (1986) | [10.1159/000138184](https://doi.org/10.1159/000138184) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Piotrovsky_2003_reference](drugs/drug_galantamine/Galantamine_Piotrovsky2003_reference.md) | — | 1-compartment (no model) | 2 | Piotrovsky V et al., Galantamine population pharmacokinetics…, Journal of clinical pharmac… (2003) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=galantamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA7 (allosteric modulator), Muscle nicotinic acetylcholine receptor (allosteric modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Piotrovsky_2003.pdf` | Piotrovsky V et al., Galantamine population pharmacokinetics…, Journal of clinical pharmac… (2003) | popPK | 10 | not captured | [12751272](https://pubmed.ncbi.nlm.nih.gov/12751272) | Population PK (NONMEM) of galantamine with numeric CL values (14.8/12.4 L/h) reported in abstract; full parameter set may be in tables/supplements. |
| `Mihailova_1986.pdf` | Mihailova D et al., Pharmacokinetics of galanthamine hydrob…, Pharmacology (1986) | popPK | 9 | [10.1159/000138184](https://doi.org/10.1159/000138184) | [3725886](https://pubmed.ncbi.nlm.nih.gov/3725886) | Original PK study in rats reporting t½, Vd, CL, and bioavailability values directly in the abstract. |
| `Hing_2005.pdf` | Hing JP et al., Pharmacokinetic simulation for switchin…, Current medical research an… (2005) | popPK | 7 | [10.1185/030079905X38213](https://doi.org/10.1185/030079905X38213) | [15899095](https://pubmed.ncbi.nlm.nih.gov/15899095) | Population PK simulation for galantamine IR/ER in AD patients, but numeric model parameters (CL, V, ka) are not shown in the abstract, likely in figures/supplementary material. |

<sub>queue written 2026-10-07T01:56:56.673743+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cai_2019 | irrelevant | 0 | 0 | Medicinal chemistry study of new cholinesterase inhibitors; galantamine is only a reference comparator, no PK parameters reported. |
| popPK | Camargo-Ayala_2024 | irrelevant | 0 | 0 | In-vitro cholinesterase inhibition study; galantamine is only a positive control comparator, no PK parameters. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | This is a registry-based observational effectiveness study of cognitive trajectories, with no PK parameters (CL, V, ka, half-life, or PK model) for galantamine reported. |
| popPK | Farlow_2003 | irrelevant | 3 | 1 | This is a narrative review describing galantamine PK qualitatively (bioavailability, linearity, covariates on clearance) without any numeric parameter values; the population PK model results are only referenced, not reported. |
| popPK | García-Alberca_2022 | irrelevant | 0 | 0 | Clinical efficacy study of EGb 761 plus AChEIs in MCI; galantamine is only a treatment arm with no PK parameters reported. |
| popPK | Girard_2022 | irrelevant | 0 | 0 | This is a chemistry/in-vitro bioactivity study of norbelladine derivatives; galantamine is only mentioned as a related alkaloid, with no PK parameters. |
| popPK | Han_2012 | irrelevant | 2 | 1 | Galantamine is only a positive-control AChE inhibitor; the model describes AChE activity, not galantamine PK parameters, and no galantamine disposition values are given. |
| popPK | Hing_2005 | relevant | 7 | 3 | Population PK simulation for galantamine IR/ER in AD patients, but numeric model parameters (CL, V, ka) are not shown in the abstract, likely in figures/supplementary material. |
| popPK | Ka_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral study of cherylline; galantamine is only mentioned as an alkaloid type, with no PK parameters. |
| popPK | Le_2023 | irrelevant | 0 | 0 | Phytochemistry/antiviral study of Amaryllidaceae alkaloids; galantamine only mentioned as a related alkaloid, no PK parameters. |
| popPK | Le_2024 | irrelevant | 0 | 0 | A mini-review of anti-SARS-CoV-2 activity of Amaryllidaceae alkaloids with no PK parameters for galantamine. |
| popPK | Ndongo_2021 | irrelevant | 0 | 0 | In-vitro acetylcholinesterase inhibition assay; galantamine is only a test compound with EC50 values, no PK parameters. |
| popPK | Rossenu_2008 | irrelevant | 3 | 1 | An IVIVC modelling paper for galantamine formulations; no PK disposition parameters (CL, V, etc.) reported, and any values would be in figures/supplements not provided. |
| popPK | Seca_2014 | irrelevant | 0 | 0 | This is a synthetic chemistry/antioxidant/AChE-inhibition study; galantamine appears only as a comparator (IC50) with no PK parameters. |
| popPK | Silva_2023 | irrelevant | 0 | 0 | In-vitro anticholinesterase medicinal chemistry study; galantamine is only a comparator, no PK parameters reported. |
| popPK | Wattmo_2011 | irrelevant | 0 | 0 | This is a clinical outcomes study of cognitive decline under cholinesterase inhibitors; no PK parameters (CL, V, ka, half-life, or population-PK model) for galantamine are reported. |
| popPK | Wattmo_2013 | irrelevant | 3 | 2 | A concentration-dose association study, not a PK parameter study; no CL/V/ka values reported (only half-life 7–8 h cited from literature and concentration means). |
| popPK | dOelsnitz_2024 | irrelevant | 0 | 0 | This is an enzyme engineering/biosensor study in E. coli for galantamine biosynthesis; no pharmacokinetic parameters for galantamine are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:57 UTC</sub>
