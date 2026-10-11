<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;epinastine&quot;}]"></div>

# epinastine

- **generic name:** epinastine
- **ATC codes:** `R06AX24`, `S01GX10`
- **DrugBank:** [DB00751](https://go.drugbank.com/drugs/DB00751) · **PubChem:** [CID 3241](https://pubchem.ncbi.nlm.nih.gov/compound/3241)
- **molar mass:** 249.3104 g/mol (C16H15N3) — DrugBank
- **groups:** approved

## About

Epinastine is an antihistamine used to treat allergic conditions, including allergic rhinitis and allergic eye disease. It is an approved medicine, available both as an oral antihistamine and as an eye drop for antiallergic use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q632405](https://www.wikidata.org/wiki/Q632405) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| epinastine | parent | 249.31 | C16H15N3 | DrugBank | [3241](https://pubchem.ncbi.nlm.nih.gov/compound/3241) | Sarashina_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:30 | 4:12 | 0/3/0 | 0/0/0 | 0/0/0 | 65,674/21,345 | openai / gpt-6-luna | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jang_2025_reference](drugs/drug_epinastine/Epinastine_Jang2025_reference.md) | — | 1-compartment (no model) | 0 | Jang JH et al., Population modeling of pharmacokinetic…, Naunyn-Schmiedeberg's archi… (2025) | [10.1007/s00210-025-04299-1](https://doi.org/10.1007/s00210-025-04299-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Sarashina_2005_estimated_value](drugs/drug_epinastine/Epinastine_Sarashina2005_estimated_value.md) | — | 1-compartment (no model) | 3 | Sarashina A et al., Population pharmacokinetics of epinasti…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.2250](https://doi.org/10.1111/j.1365-2125.2005.2250) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Sarashina_2005_hypothesized_value](drugs/drug_epinastine/Epinastine_Sarashina2005_hypothesized_value.md) | — | 1-compartment (no model) | 3 | Sarashina A et al., Population pharmacokinetics of epinasti…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.2250](https://doi.org/10.1111/j.1365-2125.2005.2250) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=epinastine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (binder), ADRA2A (binder), HRH1 (target), HRH2 (target), HTR2A (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jang_2025.pdf` | Jang JH et al., Population modeling of pharmacokinetic…, Naunyn-Schmiedeberg's archi… (2025) | popPK | 10 | [10.1007/s00210-025-04299-1](https://doi.org/10.1007/s00210-025-04299-1) | [40439884](https://pubmed.ncbi.nlm.nih.gov/40439884) | The human population-PK model reports numeric clearance changes by CYP2D6 phenotype, but not absolute clearance values. |

<sub>queue written 2026-10-07T23:26:46.869780+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ohtani_1997 | irrelevant | 2 | 0 | Rat PK/PD study reports plasma concentrations but no quantitative disposition parameters for epinastine. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | Epinastine is only a receptor antagonist, and no epinastine pharmacokinetic parameter values are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:27 UTC</sub>
