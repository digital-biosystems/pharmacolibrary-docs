<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;acrivastine&quot;}]"></div>

# acrivastine

- **generic name:** acrivastine
- **ATC codes:** `R06AX18`
- **DrugBank:** [DB09488](https://go.drugbank.com/drugs/DB09488) · **PubChem:** [CID 5284514](https://pubchem.ncbi.nlm.nih.gov/compound/5284514)
- **molar mass:** 348.4382 g/mol (C22H24N2O2) — DrugBank
- **groups:** approved

## About

Acrivastine is a non-sedating antihistamine used to treat urticaria and other allergic conditions. It is an approved medicine, available in some countries such as the United Kingdom, typically as an over-the-counter allergy remedy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q342745](https://www.wikidata.org/wiki/Q342745) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:33 | 2:39 | 0/0/0 | 0/1/0 | 0/0/0 | 51,814/2,144 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 0/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">dog</span> | [Lang_1993_dV_dt](drugs/drug_acrivastine/pd_Lang_1993_dV_dt.md) | maximal rate of increase in the AP (dV/dt) ← acrivastine · direct Emax (saturable) effect | — | Lang DG et al., Terfenadine alters action potentials in…, Journal of cardiovascular p… (1993) | [10.1097/00005344-199309000-00014](https://doi.org/10.1097/00005344-199309000-00014) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acrivastine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `McNulty_1992.pdf` | McNulty MJ et al., Disposition of acrivastine in the male…, Drug metabolism and disposi… (1992) | popPK | 10 | not captured | [1358572](https://pubmed.ncbi.nlm.nih.gov/1358572) | The study reports quantitative PK parameters (CL, Vss, t1/2, F) for acrivastine in beagle dogs. |
| `Balasubramanian_1989.pdf` | Balasubramanian R et al., Pharmacokinetics of acrivastine after o…, Journal of clinical pharmac… (1989) | popPK | 8 | [10.1002/j.1552-4604.1989.tb03359.x](https://doi.org/10.1002/j.1552-4604.1989.tb03359.x) | [2567739](https://pubmed.ncbi.nlm.nih.gov/2567739) | The study reports quantitative pharmacokinetic parameters (Cmax, tmax, AUC) for acrivastine in humans, though it lacks compartmental model parameters like clearance or volume. |

<sub>queue written 2026-10-07T22:32:48.114467+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bayramgürler_1999 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (wheal and flare responses) rather than quantitative pharmacokinetic parameters (CL, V, ka, etc.) for acrivastine. |
| popPK | Desager_1995 | irrelevant | 2 | 0 | The paper is a review of H1-antihistamines that discusses PK-PD relationships but does not provide specific quantitative disposition parameters (CL, V, etc.) for acrivastine in the provided text. |
| popPK | He_2012 | irrelevant | 2 | 0 | The paper describes a bioanalytical method and mentions its application in a PK study, but no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for acrivastine are provided in the evidence. |
| popPK | He_2012_2 | irrelevant | 0 | 0 | no_text gate: only 211 chars of text extracted (&lt; 400) |
| popPK | Mann_1989 | irrelevant | 1 | 0 | This is a review article that discusses acrivastine qualitatively but does not report original quantitative pharmacokinetic parameter values. |
| popPK | Mattila_1999 | irrelevant | 0 | 0 | The paper is a qualitative review of non-sedating antihistamines discussing clinical effects and safety, without reporting any quantitative pharmacokinetic parameters for acrivastine. |
| popPK | Ormerod_1994 | irrelevant | 0 | 0 | The paper is a clinical review of urticaria treatment that mentions acrivastine only as a therapeutic option without providing any quantitative pharmacokinetic parameters. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a review/tutorial on pharmacodynamic models of slow reversible binding and does not report pharmacokinetic parameters for acrivastine. |
| popPK | Rolan_1990 | irrelevant | 0 | 0 | The study assesses the onset of pharmacodynamic effect (bronchial challenge) and does not report quantitative pharmacokinetic parameters such as clearance or volume. |
| popPK | Simons_1999 | irrelevant | 2 | 1 | This is a review article that provides only a general half-life value for acrivastine without reporting quantitative disposition parameters like clearance, volume, or compartmental model parameters. |
| popPK | Simons_2002 | irrelevant | 2 | 0 | This is a review article discussing the clinical pharmacology of H1 antihistamines, including acrivastine, but it does not report original quantitative PK parameter values in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
