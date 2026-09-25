<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;icatibant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Icatibant_Wang2021_typical_value&quot;,&quot;label&quot;:&quot;Wang_2021_typical_value&quot;,&quot;href&quot;:&quot;drugs/drug_icatibant/Icatibant_Wang2021_typical_value.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Icatibant_Wang2021_typical_value_rse&quot;,&quot;label&quot;:&quot;Wang_2021_typical_value_rse&quot;,&quot;href&quot;:&quot;drugs/drug_icatibant/Icatibant_Wang2021_typical_value_rse.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# icatibant

- **generic name:** icatibant
- **ATC codes:** `B06AC02`
- **DrugBank:** [DB06196](https://go.drugbank.com/drugs/DB06196)
- **groups:** approved, investigational

## About

**Description.** Icatibant is a synthetic decapeptide with 5 nonproteinogenic amino acid antagonist targeting the B<sub>2</sub> receptors with a similar affinity to bradykinin. It is resistant to bradykinin-cleaving enzyme degradation and has a potency of 2-3 times higher than earlier B<sub>2</sub> receptors antagonists, thus representing a new class of medication.[A4017,A263041] It was investigated as a potential treatment of hereditary angioedema (HAE) as bradykinin was implicated in HAE swelling; specifically, mice lacking B<sub>2</sub> receptors showed reduced swelling, thus demonstrating bradykinin involvement in the disease pathophysiology.[A4017,A263046]

Icatibant was approved by the FDA on August 25, 2011, and by the EMA in 2008 as a treatment for hereditary angioedema.[L49776,L49781] The FDA approval was based on positive results obtained from 3 double-blind, randomized, controlled clinical trials known as FAST 1, 2, and 3, where a median time to almost complete symptom relief was observed to be 8 hours compared to 36 hours for the placebo treatment.[L49776]

**Indication.** Icatibant is indicated for the treatment of acute attacks of hereditary angioedema (HAE) in adults 18 years of age and older.[L49756]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 12:38 | 2:01 | 0/2/0 | 0/0/1 | 0/0/0 | 70,006/3,962 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Wang_2021_typical_value](drugs/drug_icatibant/Icatibant_Wang2021_typical_value.md) | Wang Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1768](https://doi.org/10.1002/jcph.1768) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2021_typical_value_rse](drugs/drug_icatibant/Icatibant_Wang2021_typical_value_rse.md) | Wang Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1768](https://doi.org/10.1002/jcph.1768) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Wang_2021](drugs/drug_icatibant/pd_Wang_2021_time_to_onset_of_symptom_relief.md) | Wang Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1768](https://doi.org/10.1002/jcph.1768) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=icatibant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…tibant's inactive metabolites are primarily excreted in the urine, with less than 10% of t…”</sub> | prose |

<sub>Actors without a tissue in the table: ANPEP (inhibitor), BDKRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bellucci_2004.pdf` | Bellucci F et al., The N-terminal of icatibant and bradyki…, European journal of pharmac… (2004) | pd | 4 | [10.1016/j.ejphar.2004.03.031](https://doi.org/10.1016/j.ejphar.2004.03.031) | [15140628](https://www.ncbi.nlm.nih.gov/pubmed/15140628) | metadata signals extractable PD data (EC50) |
| `Meini_2007.pdf` | Meini S et al., Comparative antagonist pharmacology at…, British journal of pharmaco… (2007) | pd | 4 | [10.1038/sj.bjp.0706995](https://doi.org/10.1038/sj.bjp.0706995) | [17179941](https://www.ncbi.nlm.nih.gov/pubmed/17179941) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-19T12:36:50.672883+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bellucci_2004 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Bellucci_2004 | not_relevant | 0 | 0 | The paper focuses on structural interactions between icatibant, bradykinin, and the B2 receptor, reporting no pharmacodynamic or exposure-response data. |
| popPK | Bellucci_2007 | irrelevant | 0 | 0 | The study is an in-vitro receptor characterization and pharmacological binding study, not a pharmacokinetic study, and reports no disposition parameters for icatibant. |
| PD | Bellucci_2007 | not_relevant | 0 | 0 | The paper characterizes kinin receptors in cultured cells using radioligand binding and functional assays (PI accumulation, PGE2 release) for agonists (BK, [desArg9]-Lys-BK); icatibant is only used as a reference antagonist in binding inhibition studies, and no exposure-response or dose-response PD model for icatibant is reported. |
| popPK | Bellucci_2009 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of bradykinin B2 receptor antagonism in synovial fibroblasts and does not report any pharmacokinetic parameters for icatibant. |
| popPK | Bentley_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of bradykinin receptor function using icatibant as a competitive antagonist, not a pharmacokinetic study. |
| popPK | Brosnihan_1998 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology paper on Angiotensin-(1-7) vasodilation where icatibant is used only as a receptor antagonist tool, with no PK parameters reported. |
| PD | Brosnihan_1998 | not_relevant | 1 | 0 | The paper focuses on the pharmacology of Angiotensin-(1-7); icatibant is only mentioned qualitatively as an antagonist that attenuates the response, with no numeric PD parameters or exposure-response data provided for icatibant. |
| popPK | Chrétien_1998 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of bradykinin receptor signaling in bovine cells where icatibant is used only as a pharmacological antagonist, with no pharmacokinetic parameters reported. |
| popPK | Meini_2007 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Meini_2007 | not_relevant | 0 | 0 | The paper focuses on comparative antagonist pharmacology at the mouse bradykinin B2 receptor and does not mention icatibant or report any exposure-response or dose-response data for it. |
| PGx | Montinaro_2020 | not_relevant | 2 | 0 | The text mentions a potential ethnic predisposition to icatibant efficacy but does not report specific pharmacogenomic data (gene variants) or quantitative PK/PD parameters. |
| popPK | Ochodnický_2013 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study using icatibant as a B2 receptor antagonist to block bradykinin signaling, and it does not report any pharmacokinetic parameters for icatibant. |
| popPK | Wiernas_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on bradykinin receptors in corneal cells, not a pharmacokinetic study, and icatibant is used only as a receptor antagonist probe. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-19 12:36 UTC</sub>
