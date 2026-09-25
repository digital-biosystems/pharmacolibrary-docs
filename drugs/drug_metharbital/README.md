<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;metharbital&quot;}]"></div>

# metharbital

- **generic name:** metharbital
- **ATC codes:** `N03AA30`
- **DrugBank:** [DB00463](https://go.drugbank.com/drugs/DB00463)
- **groups:** approved, withdrawn

## About

**Description.** Metharbital is a barbiturate anticonvulsant, similar to phenobarbital, marketed as Gemonil by Abbott Laboratories. It was patented in 1905 by Emil Fischer of Merck.

**Indication.** Metharbital is used for the treatment of epilepsy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 01:22 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 1,202/308 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metharbital) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (positive allosteric modulator), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GABRG3 (modulator), GRIA2 (target), GRIK2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Farag_1987.pdf` | Farag MM et al., Acute hepatic damage in rats impairs me…, Pharmacology (1987) | popPK | 8 | [10.1159/000138268](https://doi.org/10.1159/000138268) | [2885858](https://pubmed.ncbi.nlm.nih.gov/2885858) | The study reports qualitative changes in metharbital clearance and kinetics in rats, but specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-09-10T01:22:35.862769+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Campbell_2024 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting barbiturates in urine and does not report any pharmacokinetic parameters for metharbital. |
| popPK | Coupey_1997 | irrelevant | 0 | 0 | The text is a general review of barbiturate abuse in adolescents and contains no pharmacokinetic parameters or specific data for metharbital. |
| popPK | Farag_1987 | relevant | 8 | 2 | The study reports qualitative changes in metharbital clearance and kinetics in rats, but specific numeric parameter values are not present in the provided evidence. |
| popPK | JONES_1963 | irrelevant | 0 | 0 | The provided evidence contains only a title and no pharmacokinetic data or quantitative parameters for metharbital. |
| popPK | Kamel_1982 | irrelevant | 0 | 0 | The provided evidence contains only a general category title ("Barbituric acid derivatives") with no specific data, parameters, or mention of metharbital. |
| popPK | Lyness_1979 | irrelevant | 1 | 0 | The study focuses on behavioral tolerance and brain distribution of barbiturates rather than systemic pharmacokinetic parameters (CL, V, ka) for metharbital. |
| PD | Lyness_1979 | not_relevant | 2 | 0 | The text explicitly states that dose-response relationships were NOT obtained for metharbital, and no numeric PD parameters are provided. |
| popPK | MERLEY_1948 | irrelevant | 0 | 0 | The paper describes a qualitative detection method for barbiturates in urine and does not report any quantitative pharmacokinetic parameters for metharbital. |
| popPK | MULLAN_1965 | irrelevant | 0 | 0 | The provided evidence contains only a title and no pharmacokinetic data or quantitative parameters for metharbital. |
| popPK | Neighbors_1995 | irrelevant | 0 | 0 | The paper is a chemical synthesis study of glucuronide derivatives and does not report any pharmacokinetic parameters for metharbital. |
| popPK | Pressler_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of brivaracetam, not metharbital. |
| PD | Pressler_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (PK) and safety of brivaracetam, not metharbital, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Rondeau_1981 | irrelevant | 0 | 0 | The paper is a behavioral study on taste aversion using phenobarbital and related drugs, containing no pharmacokinetic parameters for metharbital. |
| popPK | Sato_1983 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding metharbital pharmacokinetics. |
| PD | Sato_1983 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any pharmacological data, PD models, or information regarding metharbital. |
| popPK | Soine_1989 | irrelevant | 0 | 0 | The paper is a chemical synthesis study of barbiturate derivatives and contains no pharmacokinetic data or disposition parameters for metharbital. |
| popPK | Vida_1973 | irrelevant | 0 | 0 | The evidence contains only a title fragment with no quantitative pharmacokinetic parameters or study details. |
| popPK | unknown_1949 | irrelevant | 0 | 0 | The evidence only lists "AMOBARBITAL" (a different drug) and contains no pharmacokinetic data for metharbital. |
| popPK | unknown_1949_2 | irrelevant | 0 | 0 | The evidence only lists a product name (Amobarbital elixir) and contains no pharmacokinetic data, parameters, or study details for metharbital. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
