<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;amfepramone&quot;}]"></div>

# amfepramone

- **generic name:** amfepramone
- **ATC codes:** `A08AA03`
- **DrugBank:** [DB00937](https://go.drugbank.com/drugs/DB00937)
- **groups:** approved, illicit, investigational

## About

**Description.** A appetite depressant considered to produce less central nervous system disturbance than most drugs in this therapeutic category. It is also considered to be among the safest for patients with hypertension. (From AMA Drug Evaluations Annual, 1994, p2290)

**Indication.** Used in the management of exogenous obesity as a short-term adjunct (a few weeks) in a regimen of weight reduction based on caloric restriction.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 06:32 | 2:38 | 0/0/0 | 0/0/0 | 0/0/2 | 56,687/1,533 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ABCB1** | `Q27` · CL/F | transport | [Gómez-Silva_2019](drugs/drug_amfepramone/pgx_G_mez_Silva_2019_ABCB1_Q27.md) | Gómez-Silva M et al., Pharmacogenetics of amfepramone in heal…, Scientific reports (2019) | [10.1038/s41598-019-54436-z](https://doi.org/10.1038/s41598-019-54436-z) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP3A4** | `Q27` · CL/F | metabolism | [Gómez-Silva_2019](drugs/drug_amfepramone/pgx_G_mez_Silva_2019_CYP3A4_Q27.md) | Gómez-Silva M et al., Pharmacogenetics of amfepramone in heal…, Scientific reports (2019) | [10.1038/s41598-019-54436-z](https://doi.org/10.1038/s41598-019-54436-z) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amfepramone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| metabolism | liver | `CYP3A4` metabolism | paper PGx gene |
| metabolism | small intestine | `CYP3A4` metabolism | paper PGx gene |
| excretion | brain | <sub>“…ion and/or its active metabolites are believed to cross the blood-brain barrier and the pl…”</sub> | prose |
| excretion | kidney | <sub>“…ethylpropion and its metabolites are excreted mainly by the kidney.…”</sub> | prose |
| excretion | placenta | <sub>“…lites are believed to cross the blood-brain barrier and the placenta. Diethylpropion and i…”</sub> | prose |
| excretion | small intestine | <sub>“…Diethylpropion is rapidly absorbed from the GI tract after oral administration and is exte…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dangor_1987.pdf` | Dangor CM et al., Bioavailability of amfepramone hydrochl…, Arzneimittel-Forschung (1987) | popPK | 8 | not captured | [3663274](https://pubmed.ncbi.nlm.nih.gov/3663274) | The paper is a pharmacokinetic study of amfepramone in humans, but the provided evidence contains only qualitative descriptions of the profile without specific numeric parameter values. |

<sub>queue written 2026-09-22T06:31:51.445296+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Branis_2015 | irrelevant | 0 | 0 | The paper is a case report regarding Diethylpropion and does not study amfepramone or report any pharmacokinetic parameters for it. |
| popPK | Dangor_1987 | relevant | 8 | 0 | The paper is a pharmacokinetic study of amfepramone in humans, but the provided evidence contains only qualitative descriptions of the profile without specific numeric parameter values. |
| popPK | Douglas_1982 | irrelevant | 0 | 0 | The paper is a clinical review of obesity treatment guidelines and does not report any pharmacokinetic parameters for amfepramone. |
| popPK | Gómez_1993 | irrelevant | 0 | 0 | The study focuses on diethylpropion, not amfepramone, and is an in-vitro stability/dissolution study without PK parameters. |
| popPK | Mey_1998 | irrelevant | 0 | 0 | The study investigates the racemization kinetics of diethylpropion, not the pharmacokinetics of amfepramone. |
| popPK | Poyatos_2022 | irrelevant | 2 | 0 | The paper is a systematic review of cathinones (cathinone, mephedrone, methylone, diethylpropion) and does not report original quantitative disposition parameters (CL, V, Q, ka) for amfepramone (diethylpropion), only citing Cmax/AUC/Tmax from other studies. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper is a forensic toxicology study reporting hair concentrations, not a pharmacokinetic study with disposition parameters. |
| PD | Yang_2022 | not_relevant | 0 | 0 | The paper describes a forensic LC-MS/MS method for detecting amfepramone in hair and reports concentration ranges in authentic cases, but it does not report any pharmacodynamic, exposure-response, or dose-response relationship or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
