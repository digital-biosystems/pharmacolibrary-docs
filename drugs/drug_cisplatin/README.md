<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;cisplatin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisplatin_Urien2004_reference&quot;,&quot;label&quot;:&quot;Urien_2004_reference&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/Cisplatin_Urien2004_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# cisplatin

- **generic name:** cisplatin
- **ATC codes:** `L01XA01`
- **DrugBank:** [DB00515](https://go.drugbank.com/drugs/DB00515)
- **groups:** approved, investigational

## About

**Description.** Cisplatin, cisplatinum or cis-diamminedichloroplatinum(II) (CDDP) is a platinum-based chemotherapy drug used to treat various types of cancers, including sarcomas, some carcinomas (e.g. small cell lung cancer, and ovarian cancer), lymphomas and germ cell tumors. It was the first member of its class, which now also includes carboplatin and oxaliplatin.

**Indication.** For the treatment of metastatic testicular tumors, metastatic ovarian tumors and advanced bladder cancer.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 13 | 18/0 | 13/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Urien_2004_reference](drugs/drug_cisplatin/Cisplatin_Urien2004_reference.md) | Urien S et al., Population pharmacokinetics of total an…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02082.x](https://doi.org/10.1111/j.1365-2125.2004.02082.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cisplatin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | kidney | <sub>“…centrations of platinum are highest in liver, prostate, and kidney; somewhat lower in blad…”</sub> | prose |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | lung | <sub>“…pancreas, and spleen; and lowest in bowel, adrenal, heart, lung, cerebrum, and cerebellum.…”</sub> | prose |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | skeletal muscle | <sub>“…in liver, prostate, and kidney; somewhat lower in bladder, muscle, testicle, pancreas, and…”</sub> | prose |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor, `GSTT1` substrate | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor, `CYP2B6` inhibitor, `CYP2C9` inhibitor, `GSTM1` substrate, `GSTP1` substrate, `GSTT1` substrate, `NQO1` substrate, `XDH` inducer | DrugBank actor |
| metabolism | lung | `GSTP1` substrate | DrugBank actor |
| metabolism | small intestine | `XDH` inducer | DrugBank actor |
| excretion | bile duct | <sub>“…rine. Although small amounts of platinum are present in the bile and large intestine after…”</sub> | prose |
| excretion | kidney | `ABCC2` inducer, `SLC22A2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC2` inducer, `ABCC3` inducer | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer, `ABCC3` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: A2M (binder), ABCC5 (inducer), ABCC6 (substrate), ATOX1 (binder), ATP7A (substrate), ATP7B (substrate), CYP4A11 (inducer), DNA (cross-linking/alkylation), MPG (blocker), MPO (inducer), MT1A (substrate), MT2A (substrate), PTGS2 (inhibitor), SLC31A1 (substrate), SLC31A2 (substrate), SOD1 (substrate), TF (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 274 matched, 60 returned
- **screened:** 3  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Imbs_2016.pdf` | Imbs DC et al., Pharmacokinetic interaction between paz…, Cancer chemotherapy and pha… (2016) | popPK | 10 | [10.1007/s00280-015-2953-y](https://doi.org/10.1007/s00280-015-2953-y) | [26779916](https://pubmed.ncbi.nlm.nih.gov/26779916) | The paper explicitly reports a NONMEM-based two-compartment population pharmacokinetic model and quantitative clearance values with interindividual variability for cisplatin in humans. |

<sub>queue written 2026-07-18T01:43:15.596933+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Curtis_2018 | irrelevant | not captured | not captured | The paper presents a mechanistic tumor simulation using adapted intracellular PK models calibrated to in vitro data, without reporting original systemic or population pharmacokinetic parameters for cisplatin. |
| popPK | Duffull_1997 | irrelevant | not captured | not captured | The paper exclusively reports pharmacokinetic parameters for carboplatin and only mentions cisplatin briefly as a clinical comparator without providing any quantitative PK data. |
| popPK | Henningsson_2001 | irrelevant | not captured | not captured | The paper exclusively models paclitaxel pharmacokinetics, mentioning cisplatin only as a concomitant medication with no reported PK parameters. |
| popPK | Le_2019 | irrelevant | not captured | not captured | The paper exclusively reports population pharmacokinetic parameters for cetuximab, while cisplatin is only mentioned as a co-administered chemotherapy agent with no PK data provided. |
| popPK | Levêque_1996 | irrelevant | not captured | not captured | The paper focuses exclusively on vinorelbine pharmacokinetics, mentioning cisplatin only as a co-administered drug without providing any quantitative PK parameters for it. |
| popPK | Lévi_2000 | irrelevant | not captured | not captured | The paper focuses entirely on oxaliplatin pharmacokinetics and only mentions cisplatin as a comparative reference without providing quantitative PK parameters. |
| popPK | Terranova_2021 | irrelevant | not captured | not captured | The paper focuses on the population pharmacokinetics of berzosertib, with cisplatin only mentioned as a co-administered chemotherapy agent and no quantitative PK parameters reported for it. |
| popPK | Thompson_2024 | irrelevant | not captured | not captured | This is a review article that summarizes existing literature and models without reporting original quantitative pharmacokinetic parameters for cisplatin. |
| popPK | Toso_1995 | irrelevant | not captured | not captured | The paper is a review focused on vinorelbine pharmacokinetics, with cisplatin only mentioned as a co-administered combination partner and no quantitative PK parameters provided for it. |
| popPK | de_2022 | irrelevant | not captured | not captured | The paper exclusively reports population pharmacokinetic parameters for pemetrexed, with cisplatin only serving as a co-administered drug and context for hyperhydration. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 11:10 UTC</sub>
