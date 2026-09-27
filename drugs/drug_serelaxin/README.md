<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;serelaxin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Serelaxin_Soubret2018_reference&quot;,&quot;label&quot;:&quot;Soubret_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_serelaxin/Serelaxin_Soubret2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# serelaxin

- **generic name:** serelaxin
- **ATC codes:** `C01DX21`
- **DrugBank:** [DB05794](https://go.drugbank.com/drugs/DB05794) · **PubChem:** not captured
- **groups:** investigational

## About

**Description.** Recombinant human relaxin is a hormone produced during pregnancy that facilitates the birth process by causing a softening and lengthening of the cervix and the pubic symphysis (the place where the pubic bones come together).It is a heterodimer protein secreted by the corpus luteum and placenta during pregnancy.

**Indication.** Investigated for use/treatment in cardiovascular disorders, congestive heart failure, infertility, peripheral vascular disease, and scleroderma.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| serelaxin | parent | 5963 | C256H408N74O74S8 | PubChem | [71300755](https://pubchem.ncbi.nlm.nih.gov/compound/71300755) | Soubret_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 15:45 | 3:02 | 0/1/0 | 0/0/0 | 0/0/0 | 22,577/6,022 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Soubret_2018_reference](drugs/drug_serelaxin/Serelaxin_Soubret2018_reference.md) | 1-compartment (no model) | 2 | Soubret A et al., Population pharmacokinetics of serelaxi…, British journal of clinical… (2018) | [10.1111/bcp.13714](https://doi.org/10.1111/bcp.13714) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=serelaxin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: RXFP1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Soubret_2018.pdf` | Soubret A et al., Population pharmacokinetics of serelaxi…, British journal of clinical… (2018) | popPK | 10 | [10.1111/bcp.13714](https://doi.org/10.1111/bcp.13714) | [30014598](https://pubmed.ncbi.nlm.nih.gov/30014598) | The paper is a population PK study for serelaxin and provides specific numeric values for Vss and clearance changes, though primary CL and Q values are not explicitly listed in the abstract text. |

<sub>queue written 2026-09-27T15:43:18.879255+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Liu_2003 | irrelevant | 0 | 0 | The paper is a mechanistic study identifying relaxin-3 as a ligand for GPCR135 and does not report pharmacokinetic parameters for serelaxin. |
| PD | Liu_2003 | not_relevant | 0 | 0 | The paper reports pharmacological parameters (EC50, Kd) for relaxin-3/INSL7, not serelaxin. |
| popPK | Petrie_2018 | irrelevant | 0 | 0 | The study focuses on hemodynamic correlations (pulse pressure and cardiac index) in heart failure patients, with serelaxin serving only as a background treatment context rather than the subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 15:43 UTC</sub>
