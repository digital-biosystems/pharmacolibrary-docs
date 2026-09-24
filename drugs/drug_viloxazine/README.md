<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;viloxazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Viloxazine_Nasser2021_reference&quot;,&quot;label&quot;:&quot;Nasser_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_viloxazine/Viloxazine_Nasser2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# viloxazine

- **generic name:** viloxazine
- **ATC codes:** `N06AX09`
- **DrugBank:** [DB09185](https://go.drugbank.com/drugs/DB09185)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Viloxazine is a selective norepinephrine reuptake inhibitor.[L41685] For decades, an immediate-release formulation of viloxazine has been used in Europe as an antidepressant. It was first approved in the UK in 1974; however, the immediate-release formulation was discontinued due to business reasons unrelated to drug safety and efficacy. In the US, viloxazine was assigned an orphan drug designation in 1984 under the brand name CATATROL: while this product was intended to treat cataplexy and narcolepsy, the drug was never approved for these therapeutic indications. In April 2021, an extended-release formulation of viloxazine under the brand name QELBREE was approved by the FDA for the treatment of attention deficit hyperactivity disorder (ADHD).[A247985]

**Indication.** Viloxazine is a selective norepinephrine reuptake inhibitor indicated for the treatment of Attention Deficit Hyperactivity Disorder (ADHD) in adults and pediatric patients 6 years and older.[L41685]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 21:31 | 8:19 | 0/1/0 | 0/0/0 | 0/0/1 | 59,583/7,854 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Nasser_2021_reference](drugs/drug_viloxazine/Viloxazine_Nasser2021_reference.md) | Nasser A et al., Population Pharmacokinetics of Viloxazi…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1940](https://doi.org/10.1002/jcph.1940) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Wang_2024](drugs/drug_viloxazine/pgx_Wang_2024_CYP2D6_Q100.md) | Wang Z et al., Impact of Viloxazine Extended-Release C…, Clinical drug investigation (2024) | [10.1007/s40261-024-01356-0](https://doi.org/10.1007/s40261-024-01356-0) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=viloxazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate, `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor, `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2D6` inhibitor/metabolism/substrate, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `MAOA` inhibitor, `UGT1A9` substrate, `UGT2B15` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor, `MAOA` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…ours post-dose. Less than 1% of the dose is excreted in the feces.[L41685] About 12-15% of…”</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1B (target), ADRB2 (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), HRH1 (target), HRH2 (target), HTR2B (target), HTR2C (target), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nasser_2021.pdf` | Nasser A et al., Population Pharmacokinetics of Viloxazi…, Journal of clinical pharmac… (2021) | popPK | 10 | [10.1002/jcph.1940](https://doi.org/10.1002/jcph.1940) | [34269426](https://pubmed.ncbi.nlm.nih.gov/34269426) | The paper is a population PK study for viloxazine and provides quantitative exposure parameters (Cmax, AUC) in the text, though specific model parameters like CL and V are not explicitly listed in the provided evidence. |
| `Garcia-Olivares_2026.pdf` | Garcia-Olivares J et al., Viloxazine occupies the 5-HT2C receptor…, The international journal o… (2026) | pd | 5 | [10.1093/ijnp/pyag034](https://doi.org/10.1093/ijnp/pyag034) | [42335010](https://www.ncbi.nlm.nih.gov/pubmed/42335010) | metadata signals extractable PD data (EC50) |
| `Schoretsanitis_2019.pdf` | Schoretsanitis G et al., Clinically Significant Drug-Drug Intera…, CNS drugs (2019) | pgx | 8 | [10.1007/s40263-019-00683-7](https://doi.org/10.1007/s40263-019-00683-7) | [31776871](https://www.ncbi.nlm.nih.gov/pubmed/31776871) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mansour_2026.pdf` | Mansour GK et al., The Viloxazine Paradox: A Noradrenergic…, CNS neuroscience & therapeu… (2026) | pgx | 7 | [10.1002/cns.70839](https://doi.org/10.1002/cns.70839) | [41947282](https://www.ncbi.nlm.nih.gov/pubmed/41947282) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Wang_2021.pdf` | Wang Z et al., Impact of Paroxetine, a Strong CYP2D6 I…, Clinical pharmacology in dr… (2021) | pgx | 7 | [10.1002/cpdd.948](https://doi.org/10.1002/cpdd.948) | [33943033](https://www.ncbi.nlm.nih.gov/pubmed/33943033) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Williams_2023.pdf` | Williams OC et al., Adult attention deficit hyperactivity d…, Annals of medicine and surg… (2023) | pgx | 7 | [10.1097/MS9.0000000000000631](https://doi.org/10.1097/MS9.0000000000000631) | [37228994](https://www.ncbi.nlm.nih.gov/pubmed/37228994) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-24T21:26:41.397782+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Garcia-Olivares_2024 | irrelevant | 2 | 1 | The study is a mechanistic microdialysis experiment in rats focusing on neurotransmitter levels, and while it references human population PK models for dose relevance, it does not report original quantitative PK parameters (CL, V, etc.) for viloxazine. |
| popPK | Garcia-Olivares_2026 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| PGx | Mansour_2026 | not_relevant | 0 | 0 | The paper is a general review of viloxazine's pharmacology and clinical use, with no mention of gene variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Schoretsanitis_2019 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for ADHD agents and mentions viloxazine only as a pipeline agent with no available data, providing no pharmacogenomic information for viloxazine. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance, not pharmacogenomic effects on viloxazine. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (paroxetine) rather than a pharmacogenomic effect (gene variant/genotype) on viloxazine pharmacokinetics. |
| PGx | Williams_2023 | not_relevant | 0 | 0 | The paper is a general review of adult ADHD and viloxazine that mentions CYP metabolism but does not report specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Yu_2020 | not_relevant | 2 | 5 | The paper mentions CYP2D6 polymorphism but explicitly states the difference is &lt;2-fold and unlikely to be clinically significant, without reporting a fitted pharmacogenomic effect size. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP1A2 inhibition) for viloxazine, not pharmacogenomic effects (gene variants). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-24 21:26 UTC</sub>
