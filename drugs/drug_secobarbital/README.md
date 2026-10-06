<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;secobarbital&quot;}]"></div>

# secobarbital

- **generic name:** secobarbital
- **ATC codes:** `N05CA06`
- **DrugBank:** [DB00418](https://go.drugbank.com/drugs/DB00418) · **PubChem:** [CID 5193](https://pubchem.ncbi.nlm.nih.gov/compound/5193)
- **molar mass:** 238.2829 g/mol (C12H18N2O3) — DrugBank
- **groups:** approved, vet_approved

## About

Secobarbital is a barbiturate sedative-hypnotic used to treat insomnia. It remains an approved medicine, including for veterinary use, though barbiturate sleeping pills are now used only rarely and largely in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414788](https://www.wikidata.org/wiki/Q414788) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:18 | 0:41 | 0/0/0 | 0/0/0 | 0/0/0 | 19,878/678 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=secobarbital) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer, `CYP2C19` inducer, `CYP2C8` inducer, `CYP2C9` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target), GRIN1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Verpooten_1982.pdf` | Verpooten GA et al., Prediction of the efficacy of hemoperfu…, Archives of toxicology. Sup… (1982) | popPK | 7 | [10.1007/978-3-642-68511-8_54](https://doi.org/10.1007/978-3-642-68511-8_54) | [6954915](https://pubmed.ncbi.nlm.nih.gov/6954915) | Secobarbital PK (two-compartment model) studied in intoxicated patients, but no numeric parameter values appear in the evidence. |
| `Hartley_1989.pdf` | Hartley DM et al., Delayed rescue of N-methyl-D-aspartate…, The Journal of pharmacology… (1989) | pd | 5 | not captured | [2569534](https://www.ncbi.nlm.nih.gov/pubmed/2569534) | metadata signals extractable PD data (EC50) |
| `Wong_1984.pdf` | Wong EH et al., gamma-Aminobutyric acid activation of 3…, Brain research (1984) | pd | 4 | [10.1016/0006-8993(84)91213-7](https://doi.org/10.1016/0006-8993(84)91213-7) | [6331574](https://www.ncbi.nlm.nih.gov/pubmed/6331574) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T21:18:16.510060+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_1994 | irrelevant | 0 | 0 | Secobarbital is only a co-administered enzyme inducer altering warfarin PK; no secobarbital disposition parameters are reported. |
| popPK | Hartley_1989 | irrelevant | 0 | 0 | Secobarbital is only a co-applied test agent in an in-vitro neuroprotection assay; no PK parameters reported. |
| popPK | Login_1998 | irrelevant | 0 | 0 | Secobarbital is only used as a co-administered GabaA modulator in a rat neurochemistry assay; no PK parameters reported. |
| PGx | Sakuma_1999 | not_relevant | 2 | 3 | Secobarbital is only used as a CYP1A2 inducer in vitro; no gene variant effect on secobarbital PK/PD is reported. |
| popPK | Verpooten_1982 | relevant | 7 | 2 | Secobarbital PK (two-compartment model) studied in intoxicated patients, but no numeric parameter values appear in the evidence. |
| popPK | Wong_1984 | irrelevant | 0 | 0 | In-vitro mechanistic study of GABA/36Cl- flux in rat hippocampal slices; secobarbital is only a co-applied agent with no PK parameters. |
| popPK | Yost_1993 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor inhibition; no PK disposition parameters for secobarbital. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
