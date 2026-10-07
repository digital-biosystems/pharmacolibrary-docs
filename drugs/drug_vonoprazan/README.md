<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;vonoprazan&quot;}]"></div>

# vonoprazan

- **generic name:** vonoprazan
- **ATC codes:** `A02BC08`, `A02BD17`
- **DrugBank:** [DB11739](https://go.drugbank.com/drugs/DB11739) · **PubChem:** [CID 15981397](https://pubchem.ncbi.nlm.nih.gov/compound/15981397)
- **molar mass:** 345.39 g/mol (C17H16FN3O2S) — DrugBank
- **groups:** approved, investigational

## About

Vonoprazan is an acid-suppressing drug used for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease, and in combination regimens to eradicate Helicobacter pylori. It is an approved medicine, though it appears not to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27887191](https://www.wikidata.org/wiki/Q27887191) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vonoprazan | parent | 345.39 | C17H16FN3O2S | DrugBank | [15981397](https://pubchem.ncbi.nlm.nih.gov/compound/15981397) | Scarpignato_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:31 | 1:09 | 0/1/1 | 0/0/0 | 0/0/0 | 110,355/5,914 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Scarpignato_2022_reference](drugs/drug_vonoprazan/Vonoprazan_Scarpignato2022_reference.md) | — | 1-compartment (no model) | 8 (+4 cov.) | Scarpignato C et al., A Population Pharmacokinetic Model of V…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2019](https://doi.org/10.1002/jcph.2019) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Echizen_2016_reference](drugs/drug_vonoprazan/Vonoprazan_Echizen2016_reference.md) | — | 1-compartment (no model) | 0 | Echizen H, The First-in-Class Potassium-Competitiv…, Clinical pharmacokinetics (2016) | [10.1007/s40262-015-0326-7](https://doi.org/10.1007/s40262-015-0326-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vonoprazan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ATP4A (inhibitor), ATP4A (modulator), ATP4B (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Scarpignato_2023.pdf` | Scarpignato C et al., A translational pharmacokinetic/pharmac…, Alimentary pharmacology & t… (2023) | popPK | 5 | [10.1111/apt.17510](https://doi.org/10.1111/apt.17510) | [37066678](https://pubmed.ncbi.nlm.nih.gov/37066678) | The paper describes a PK/PD model using an existing population PK model for vonoprazan, but no specific numeric PK parameter values (CL, V, ka, etc.) are provided in the evidence. |

<sub>queue written 2026-10-07T19:30:40.514095+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gatta_2023 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Gatta_2023 | not_relevant | 1 | 0 | The provided text is only the title of an editorial and does not contain the full text or any numeric PD parameters. |
| popPK | Jung_2026 | relevant | 10 | 1 | The study develops a population PK/PD model for vonoprazan, but the specific numeric parameter estimates (CL, Vd, ka) are contained in Table 2, which is not provided in the evidence. |
| popPK | Mulford_2026 | relevant | 9 | 4 | The study applies a population PK model to vonoprazan in humans, but the specific table containing the model parameters (Table 2) is referenced rather than included in the evidence, leaving only AUC values. |
| popPK | Scarpignato_2023 | relevant | 5 | 0 | The paper describes a PK/PD model using an existing population PK model for vonoprazan, but no specific numeric PK parameter values (CL, V, ka, etc.) are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:30 UTC</sub>
