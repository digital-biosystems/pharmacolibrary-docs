<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefpiramide&quot;}]"></div>

# cefpiramide

- **generic name:** cefpiramide
- **ATC codes:** `J01DD11`
- **DrugBank:** [DB00430](https://go.drugbank.com/drugs/DB00430) · **PubChem:** [CID 636405](https://pubchem.ncbi.nlm.nih.gov/compound/636405)
- **molar mass:** 612.637 g/mol (C25H24N8O7S2) — DrugBank
- **groups:** approved

## About

Cefpiramide is a third-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibacterial, but it does not appear to be authorised in the European Union and its current use seems limited to certain countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4921174](https://www.wikidata.org/wiki/Q4921174) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefpiramide | parent | 612.637 | C25H24N8O7S2 | DrugBank | [636405](https://pubchem.ncbi.nlm.nih.gov/compound/636405) | Conte_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:03 | 0:36 | 0/1/0 | 0/0/0 | 0/0/0 | 29,372/2,308 | einfracz / qwen3.8-27b | 2 | 1/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Conte_1987_reference](drugs/drug_cefpiramide/Cefpiramide_Conte1987_reference.md) | — | 1-compartment (no model) | 2 | Conte JE, Pharmacokinetics of cefpiramide in volu…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.10.1585](https://doi.org/10.1128/AAC.31.10.1585) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefpiramide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Conte_1987.pdf` | Conte JE, Pharmacokinetics of cefpiramide in volu…, Antimicrobial agents and ch… (1987) | popPK | 10 | [10.1128/AAC.31.10.1585](https://doi.org/10.1128/AAC.31.10.1585) | [3435107](https://pubmed.ncbi.nlm.nih.gov/3435107) | The paper reports specific quantitative pharmacokinetic parameters including elimination half-lives and serum clearances for cefpiramide in humans, directly available in the text. |
| `Ito_1985.pdf` | Ito K et al., [Fundamental and clinical studies on ce…, The Japanese journal of ant… (1985) | popPK | 9 | not captured | [4079008](https://pubmed.ncbi.nlm.nih.gov/4079008) | The study is a pharmacokinetic investigation of cefpiramide in humans using a three-compartment model, but the evidence only provides peak tissue concentrations and times, lacking explicit numerical values for clearance, volume of distribution, or rate constants. |

<sub>queue written 2026-10-07T11:03:16.659628+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Higashimori_2001 | irrelevant | 2 | 3 | The study is a perfusion experiment with isolated rat livers measuring hepatobiliary transport parameters (Vmax, Km) rather than systemic population pharmacokinetic parameters (CL, Vd) for cefpiramide. |
| popPK | Ito_1985 | relevant | 9 | 3 | The study is a pharmacokinetic investigation of cefpiramide in humans using a three-compartment model, but the evidence only provides peak tissue concentrations and times, lacking explicit numerical values for clearance, volume of distribution, or rate constants. |
| popPK | Yamaoka_1987 | relevant | 9 | 4 | The paper reports a population pharmacokinetic study of cefpiramide in rats, but the specific numeric parameter values are located in Table III, which is referenced in the text but not fully provided in the extracted evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:03 UTC</sub>
