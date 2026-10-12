<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01B&quot;,&quot;href&quot;:&quot;atc/R01B.md&quot;},{&quot;label&quot;:&quot;phenylpropanolamine&quot;}]"></div>

# phenylpropanolamine

- **generic name:** phenylpropanolamine
- **ATC codes:** `R01BA01`
- **DrugBank:** [DB00397](https://go.drugbank.com/drugs/DB00397) · **PubChem:** [CID 26934](https://pubchem.ncbi.nlm.nih.gov/compound/26934)
- **molar mass:** 151.209 g/mol (C9H13NO) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Phenylpropanolamine is a decongestant that was used to relieve nasal congestion. It has been withdrawn from human use over safety concerns, but remains approved for veterinary purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q97786582](https://www.wikidata.org/wiki/Q97786582) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenylpropanolamine | parent | 151.209 | C9H13NO | DrugBank | [26934](https://pubchem.ncbi.nlm.nih.gov/compound/26934) | Shargel_1990 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:24 | 0:39 | 0/1/0 | 0/0/0 | 0/0/0 | 22,355/2,135 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Shargel_1990_reference](drugs/drug_phenylpropanolamine/Phenylpropanolamine_Shargel1990_reference.md) | — | 1-compartment (no model) | 6 | Shargel L et al., Bioavailability and cardiovascular safe…, Biopharmaceutics & drug dis… (1990) | [10.1002/bdd.2510110703](https://doi.org/10.1002/bdd.2510110703) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shargel_1990.pdf` | Shargel L et al., Bioavailability and cardiovascular safe…, Biopharmaceutics & drug dis… (1990) | popPK | 8 | [10.1002/bdd.2510110703](https://doi.org/10.1002/bdd.2510110703) | [2265237](https://pubmed.ncbi.nlm.nih.gov/2265237) | Human PK study of PPA reporting kA, elimination half-life, and lag time with numeric values directly in the abstract; no CL/V but compartmental model parameters present. |
| `Carrillo_2000.pdf` | Carrillo JA et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039020-00004](https://doi.org/10.2165/00003088-200039020-00004) | [10976659](https://www.ncbi.nlm.nih.gov/pubmed/10976659) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T13:24:00.006039+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altenbach_2002 | irrelevant | 0 | 0 | Phenylpropanolamine is only a comparator in a pharmacology study of ABT-866; no PK parameters for it are reported. |
| PGx | Bedada_2018 | not_relevant | 2 | 5 | Phenylpropanolamine is used only as a urinary metabolite/compliance marker (cathinone/PPA ratio correlated with CYP2D6 genotype), not as a drug with a reported pharmacogenomic effect on its own PK/PD parameter. |
| PGx | Benedetti_2001 | not_relevant | 0 | 0 | Phenylpropanolamine only mentioned as a possible interaction with MAO-metabolized drugs; no gene variant effect on its PK/PD reported. |
| PGx | Carrillo_2000 | not_relevant | 0 | 0 | Phenylpropanolamine is only mentioned as a CYP1A2 inhibitor of caffeine; no gene variant effect on its PK/PD is reported. |
| popPK | Rothman_2003 | irrelevant | 0 | 0 | In vitro receptor/transporter pharmacology study of ephedrine stereoisomers; phenylpropanolamine only mentioned as a related compound, no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:24 UTC</sub>
