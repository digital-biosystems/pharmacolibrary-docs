<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;midostaurin&quot;}]"></div>

# midostaurin

- **generic name:** midostaurin
- **ATC codes:** `L01EX10`, `L01XE`
- **DrugBank:** [DB06595](https://go.drugbank.com/drugs/DB06595) · **PubChem:** [CID 9829523](https://pubchem.ncbi.nlm.nih.gov/compound/9829523)
- **molar mass:** 570.649 g/mol (C35H30N4O4) — DrugBank
- **groups:** approved, investigational

## About

Midostaurin is a protein kinase inhibitor used to treat acute myeloid leukemia and, in the European Union, also mastocytosis. It is an approved anticancer medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6842945](https://www.wikidata.org/wiki/Q6842945) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| midostaurin | parent | 570.649 | C35H30N4O4 | DrugBank | [9829523](https://pubchem.ncbi.nlm.nih.gov/compound/9829523) | Joisten_2026, Yin_2008 |
| CGP52421 | metabolite | 586.648 | C35H30N4O5 | PubChem | [137552093](https://pubchem.ncbi.nlm.nih.gov/compound/137552093) | Yin_2008 |
| CGP62221 | metabolite | 556.622 | C34H28N4O4 | PubChem | [11261445](https://pubchem.ncbi.nlm.nih.gov/compound/11261445) | Yin_2008 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:55 | 3:04 | 0/1/1 | 0/0/0 | 0/0/0 | 98,267/13,833 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Joisten_2026_reference](drugs/drug_midostaurin/Midostaurin_Joisten2026_reference.md) | — | 1-compartment (no model) | 2 | Joisten CS et al., Clinical impact of potential drug-drug…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01951-25](https://doi.org/10.1128/aac.01951-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Yin_2008_reference](drugs/drug_midostaurin/Midostaurin_Yin2008_reference.md) | — | general linear (no model) | 2 | Yin OQ et al., A mechanism-based population pharmacoki…, Clinical pharmacokinetics (2008) | [10.2165/0003088-200847120-00005](https://doi.org/10.2165/0003088-200847120-00005) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=midostaurin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/inhibitor, `CYP2B6` inducer, `CYP2C19` inducer/inhibitor, `CYP2C8` inducer/inhibitor, `CYP2C9` inducer/inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer, `CYP3A7` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP3A43 (inducer), FLT3 (inhibitor), FLT3 (target), KDR (inhibitor), KDR (target), KIT (inhibitor), KIT (target), PDGFRA (inhibitor), PDGFRA (target), PDGFRB (inhibitor), PDGFRB (target), PRKCA (inhibitor), PRKCA (target), PRKCG (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yin_2008.pdf` | Yin OQ et al., A mechanism-based population pharmacoki…, Clinical pharmacokinetics (2008) | popPK | 10 | [10.2165/0003088-200847120-00005](https://doi.org/10.2165/0003088-200847120-00005) | [19026036](https://pubmed.ncbi.nlm.nih.gov/19026036) | Human population-PK model reports numeric midostaurin clearance and induction parameters. |

<sub>queue written 2026-10-07T02:52:21.560693+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:52 UTC</sub>
