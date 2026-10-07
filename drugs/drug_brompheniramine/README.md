<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;brompheniramine&quot;}]"></div>

# brompheniramine

- **generic name:** brompheniramine
- **ATC codes:** `R06AB01`
- **DrugBank:** [DB00835](https://go.drugbank.com/drugs/DB00835) · **PubChem:** [CID 6834](https://pubchem.ncbi.nlm.nih.gov/compound/6834)
- **molar mass:** 319.239 g/mol (C16H19BrN2) — DrugBank
- **groups:** approved

## About

Brompheniramine is an antihistamine used to relieve allergy symptoms such as vasomotor rhinitis. It is an approved, older first-generation antihistamine, available mainly in over-the-counter cold and allergy medicines, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2606497](https://www.wikidata.org/wiki/Q2606497) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:43 | 1:06 | 0/0/0 | 0/1/0 | 0/0/0 | 13,054/1,453 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shin_2006_I_Ca](drugs/drug_brompheniramine/pd_Shin_2006_I_Ca.md) | I(Ca) ← brompheniramine · direct sigmoid Emax (Hill) effect | — | Shin WH et al., Electrophysiological effects of bromphe…, Pharmacological research (2006) | [10.1016/j.phrs.2006.08.004](https://doi.org/10.1016/j.phrs.2006.08.004) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shin_2006_I_Na](drugs/drug_brompheniramine/pd_Shin_2006_I_Na.md) | I(Na) ← brompheniramine · direct sigmoid Emax (Hill) effect | — | Shin WH et al., Electrophysiological effects of bromphe…, Pharmacological research (2006) | [10.1016/j.phrs.2006.08.004](https://doi.org/10.1016/j.phrs.2006.08.004) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shin_2006_I_hERG](drugs/drug_brompheniramine/pd_Shin_2006_I_hERG.md) | I(hERG) ← brompheniramine · direct sigmoid Emax (Hill) effect | — | Shin WH et al., Electrophysiological effects of bromphe…, Pharmacological research (2006) | [10.1016/j.phrs.2006.08.004](https://doi.org/10.1016/j.phrs.2006.08.004) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=brompheniramine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), HRH1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_1998.pdf` | Wang WX et al., "Conventional" antihistamines slow card…, Journal of cardiovascular p… (1998) | pd | 4 | [10.1097/00005344-199807000-00019](https://doi.org/10.1097/00005344-199807000-00019) | [9676731](https://www.ncbi.nlm.nih.gov/pubmed/9676731) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T22:42:51.228508+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chiu_2019 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (ED50, duration of analgesia) rather than pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Dachman_1994 | irrelevant | 0 | 0 | Brompheniramine is used as a pharmacological tool (H1 antagonist) to study histamine-induced venodilation, not as the subject of a pharmacokinetic analysis. |
| popPK | Guevara-Balcázar_2003 | irrelevant | 0 | 0 | Brompheniramine is used only as an H1 receptor antagonist to block effects in an in-vitro rat heart model, with no pharmacokinetic parameters reported. |
| popPK | Onaran_1990 | irrelevant | 0 | 0 | The study is an in-vitro receptor kinetics experiment in isolated rabbit arteries, not a pharmacokinetic study of drug disposition. |
| popPK | Shin_2006 | irrelevant | 0 | 0 | The study investigates cardiac electrophysiological effects (ion channel blocking) in vitro and in isolated tissues, not pharmacokinetic disposition parameters. |
| popPK | Wang_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of cardiac repolarization (QT prolongation) in isolated feline hearts, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
