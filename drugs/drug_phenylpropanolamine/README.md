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

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

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
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Shargel_1990_reference](drugs/drug_phenylpropanolamine/Phenylpropanolamine_Shargel1990_reference.md) | — | 1-compartment (no model) | 6 | Shargel L et al., Bioavailability and cardiovascular safe…, Biopharmaceutics & drug dis… (1990) | [10.1002/bdd.2510110703](https://doi.org/10.1002/bdd.2510110703) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenylpropanolamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | stomach | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `MAOA` inhibitor | DrugBank actor |
| metabolism | liver | `MAOA` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA2A (unknown), ADRB1 (target), ADRB2 (target), DRD1 (partial agonist), TERT (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
