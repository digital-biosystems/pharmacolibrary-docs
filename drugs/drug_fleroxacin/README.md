<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;fleroxacin&quot;}]"></div>

# fleroxacin

- **generic name:** fleroxacin
- **ATC codes:** `J01MA08`
- **DrugBank:** [DB04576](https://go.drugbank.com/drugs/DB04576) · **PubChem:** [CID 3357](https://pubchem.ncbi.nlm.nih.gov/compound/3357)
- **molar mass:** 369.344 g/mol (C17H18F3N3O3) — DrugBank
- **groups:** experimental

## About

Fleroxacin is a fluoroquinolone antibiotic that was developed as an anti-infective agent to treat bacterial infections. It is considered an experimental drug and is not in routine clinical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3746573](https://www.wikidata.org/wiki/Q3746573) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fleroxacin | parent | 369.344 | C17H18F3N3O3 | DrugBank | [3357](https://pubchem.ncbi.nlm.nih.gov/compound/3357) | Jiao_2018, Miller_1992, Uehlinger_1996 |
| N-demethylfleroxacin | metabolite | 355.316 | C16H16F3N3O3 | PubChem | [133249](https://pubchem.ncbi.nlm.nih.gov/compound/133249) | Jiao_2018 |
| N-oxide fleroxacin | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:55 | 1:39 | 0/4/1 | 0/0/0 | 0/0/0 | 61,191/6,062 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Uehlinger_1996_reference](drugs/drug_fleroxacin/Fleroxacin_Uehlinger1996_reference.md) | — | 1-compartment (no model) | 3 | Uehlinger DE et al., Pharmacokinetics of fleroxacin after mu…, Antimicrobial agents and ch… (1996) | [10.1128/AAC.40.8.1903](https://doi.org/10.1128/AAC.40.8.1903) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jiao_2018_reference](drugs/drug_fleroxacin/Fleroxacin_Jiao2018_reference.md) | — | general linear (no model) | 2 | Jiao Y et al., First population pharmacokinetic analys…, European journal of pharmac… (2018) | [10.1016/j.ejps.2018.07.054](https://doi.org/10.1016/j.ejps.2018.07.054) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Miller_1992_aqueous_humor](drugs/drug_fleroxacin/Fleroxacin_Miller1992_aqueous_humor.md) | — | 1-compartment (no model) | 4 | Miller MH et al., Fleroxacin pharmacokinetics in aqueous…, Antimicrobial agents and ch… (1992) | [10.1128/AAC.36.1.32](https://doi.org/10.1128/AAC.36.1.32) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Miller_1992_serum](drugs/drug_fleroxacin/Fleroxacin_Miller1992_serum.md) | — | 1-compartment (no model) | 7 | Miller MH et al., Fleroxacin pharmacokinetics in aqueous…, Antimicrobial agents and ch… (1992) | [10.1128/AAC.36.1.32](https://doi.org/10.1128/AAC.36.1.32) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Miller_1992_vitreous_humor](drugs/drug_fleroxacin/Fleroxacin_Miller1992_vitreous_humor.md) | — | 1-compartment (no model) | 4 | Miller MH et al., Fleroxacin pharmacokinetics in aqueous…, Antimicrobial agents and ch… (1992) | [10.1128/AAC.36.1.32](https://doi.org/10.1128/AAC.36.1.32) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fleroxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jiao_2018.pdf` | Jiao Y et al., First population pharmacokinetic analys…, European journal of pharmac… (2018) | popPK | 10 | [10.1016/j.ejps.2018.07.054](https://doi.org/10.1016/j.ejps.2018.07.054) | [30076955](https://pubmed.ncbi.nlm.nih.gov/30076955) | The text reports specific population pharmacokinetic parameters (clearance ratios, formation clearances in L/h, and relative volume of distribution ratios) for fleroxacin and its metabolites in humans. |
| `Uehlinger_1996.pdf` | Uehlinger DE et al., Pharmacokinetics of fleroxacin after mu…, Antimicrobial agents and ch… (1996) | popPK | 10 | [10.1128/AAC.40.8.1903](https://doi.org/10.1128/AAC.40.8.1903) | [8843301](https://pubmed.ncbi.nlm.nih.gov/8843301) | The text explicitly reports quantitative PK parameters (clearance, volume of distribution) and model details for fleroxacin in hemodialysis patients. |
| `Delon_1999.pdf` | Delon A et al., Pharmacokinetic-pharmacodynamic contrib…, Antimicrobial agents and ch… (1999) | popPK | 5 | [10.1128/AAC.43.6.1511](https://doi.org/10.1128/AAC.43.6.1511) | [10348785](https://pubmed.ncbi.nlm.nih.gov/10348785) | The study reports PK-PD contributions and CSF/plasma concentration ratios for fleroxacin in rats, but specific numeric disposition parameters (CL, V, ka) are not explicitly provided in the text. |

<sub>queue written 2026-10-07T11:53:47.705727+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delon_1999 | relevant | 5 | 0 | The study reports PK-PD contributions and CSF/plasma concentration ratios for fleroxacin in rats, but specific numeric disposition parameters (CL, V, ka) are not explicitly provided in the text. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA receptor binding and does not report pharmacokinetic parameters for fleroxacin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:53 UTC</sub>
