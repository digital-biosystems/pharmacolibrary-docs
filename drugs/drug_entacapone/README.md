<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;entacapone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Entacapone_Heikkinen2001_reference&quot;,&quot;label&quot;:&quot;Heikkinen_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# entacapone

- **generic name:** entacapone
- **ATC codes:** `N04BX02`
- **DrugBank:** [DB00494](https://go.drugbank.com/drugs/DB00494) · **PubChem:** [CID 5281081](https://pubchem.ncbi.nlm.nih.gov/compound/5281081)
- **molar mass:** 305.286 g/mol (C14H15N3O5) — DrugBank
- **groups:** approved, investigational

## About

Entacapone is a COMT inhibitor used to treat Parkinson's disease. It is an approved medicine, authorised in the European Union for Parkinson's disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416444](https://www.wikidata.org/wiki/Q416444) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| entacapone | parent | 305.286 | C14H15N3O5 | DrugBank | [5281081](https://pubchem.ncbi.nlm.nih.gov/compound/5281081) | Heikkinen_2001 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 13:01 | 1:36 | 1/0/0 | 2/0/0 | 0/0/0 | 72,102/10,773 | ollama / glm-5.3-flash | 2 | 1/1 | 1/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span> | [Heikkinen_2001_reference](drugs/drug_entacapone/Entacapone_Heikkinen2001_reference.md) | ▶ model + simulator | 1-compartment, oral | 9 | Heikkinen H et al., Pharmacokinetics of entacapone, a perip…, European journal of clinica… (2001) | [10.1007/s002280000244](https://doi.org/10.1007/s002280000244) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Alqahtani_2015_PD](drugs/drug_entacapone/pd_Alqahtani_2015_PD.md) | PD parameters (COMT inhibition pharmacodynamic response) ← entacapone · inhibition effect | — | Alqahtani S et al., Development of a physiologically based…, Biopharmaceutics & drug dis… (2015) | [10.1002/bdd.1986](https://doi.org/10.1002/bdd.1986) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Forsberg_2002_COMT_inhibition_in_erythrocytes](drugs/drug_entacapone/pd_Forsberg_2002_COMT_inhibition_in_erythrocytes.md) | COMT inhibition in erythrocytes ← entacapone · direct Emax (saturable) effect | — | Forsberg M et al., Pharmacodynamic response of entacapone…, Pharmacology & toxicology (2002) | [10.1034/j.1600-0773.2002.900606.x](https://doi.org/10.1034/j.1600-0773.2002.900606.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=entacapone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `COMT` inhibitor, `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `COMT` inhibitor, `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `COMT` inhibitor, `CYP2D6` inhibitor, `UGT1A9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Heikkinen_2001.pdf` | Heikkinen H et al., Pharmacokinetics of entacapone, a perip…, European journal of clinica… (2001) | popPK | 10 | [10.1007/s002280000244](https://doi.org/10.1007/s002280000244) | [11294372](https://pubmed.ncbi.nlm.nih.gov/11294372) | Full PK parameters (Vc, Vss, CL, half-lives, AUC, bioavailability) for entacapone are reported directly in the abstract. |
| `Alqahtani_2015.pdf` | Alqahtani S et al., Development of a physiologically based…, Biopharmaceutics & drug dis… (2015) | popPK | 8 | [10.1002/bdd.1986](https://doi.org/10.1002/bdd.1986) | [26295926](https://pubmed.ncbi.nlm.nih.gov/26295926) | PBPK/PK modeling study of entacapone itself in humans, but no numeric parameter values appear in the provided evidence. |

<sub>queue written 2026-10-06T13:00:18.265923+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alqahtani_2015 | relevant | 8 | 2 | PBPK/PK modeling study of entacapone itself in humans, but no numeric parameter values appear in the provided evidence. |
| popPK | Forsberg_2002 | irrelevant | 4 | 3 | Rat PK/PD study of entacapone, but evidence reports only bioavailability (F) and Emax/EC50 qualitative findings, not disposition parameters (CL, V, ka); numeric values like EC50 appear not fully provided. |
| popPK | LeWitt_2009 | irrelevant | 3 | 2 | Entacapone is a co-formulated comparator; only levodopa PK values (AUC, Cmax) are reported, no entacapone disposition parameters. |
| popPK | Léger_1998 | irrelevant | 2 | 2 | Entacapone (OR-611) is only a co-administered COMT inhibitor probe; the PK model concerns [18F]FDOPA, not entacapone itself, and no entacapone disposition parameters are given. |
| popPK | Müller_2014 | irrelevant | 0 | 0 | This is a review of rasagiline; entacapone is only mentioned as a comparator with no PK parameters reported. |
| popPK | Rocha_2014 | irrelevant | 2 | 0 | Entacapone is only a comparator arm in a BIA 9-1067 clinical trial; the evidence contains only adverse-event tables with no PK parameters. |
| popPK | Senek_2020 | irrelevant | 2 | 3 | This is a population-PK model of levodopa; entacapone is only a co-infused COMT inhibitor whose effect is a covariate (shift in levodopa CL/F), with no entacapone disposition parameters reported. |
| popPK | Sethi_2021 | irrelevant | 1 | 0 | Clinical outcomes study of levodopa formulations with no PK parameters for entacapone reported. |
| popPK | Trocóniz_1998 | irrelevant | 2 | 2 | The study models levodopa pharmacodynamics with entacapone only as a co-administered modifier; no entacapone disposition parameters (CL, V, ka) are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 13:00 UTC</sub>
