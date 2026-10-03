<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dabrafenib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dabrafenib_Balakirouchenane2020_base&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_base.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dabrafenib_Balakirouchenane2020_final_final_tra_model&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_final_final_tra_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_final_tra_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# dabrafenib

- **generic name:** dabrafenib
- **ATC codes:** `L01EC02`
- **DrugBank:** [DB08912](https://go.drugbank.com/drugs/DB08912) · **PubChem:** [CID 44462760](https://pubchem.ncbi.nlm.nih.gov/compound/44462760)
- **molar mass:** 519.562 g/mol (C23H20F3N5O2S2) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Dabrafenib mesylate (Tafinlar) is a reversible ATP-competitive kinase inhibitor and targets the MAPK pathway. It was approved on May 29, 2013, for the treatment of melanoma with V600E or V6000K mutation.[L41955] It was also used for metastatic non-small cell lung cancer with the same mutation.[L41955]

In May 2018, Tafinlar (dabrafenib), in combination with Mekinist ([DB08911]), was approved to treat anaplastic thyroid cancer caused by an abnormal BRAF V600E gene.[L41955]

**Indication.** As monotherapy, dabrafenib is indicated to treat unresectable or metastatic melanoma with BRAF V600E mutation as detected by an FDA-approved test.[L41955] 

In combination with [trametinib], dabrafenib is indicated to treat for:

- the treatment of unresectable or metastatic melanoma with BRAF V600E or V600K mutations as detected by an FDA-approved test.[L41955]
- the adjuvant treatment of melanoma with BRAF V600E or V600K mutations and involvement of lymph node(s), following complete resection.[L41955]
- the treatment of metastatic non-small cell lung cancer (NSCLC) with BRAF V600E mutation.[L41955]
- the treatment of locally advanced or metastatic anaplastic thyroid cancer (ATC) with BRAF V600E mutation and with no satisfactory locoregional treatment options.[L41955]
- treatment of adult and pediatric patients six years and older with unresectable or metastatic solid tumours with BRAF V600E mutation who have progressed following prior treatment and have no satisfactory alternative treatment options. This indication is approved under accelerated approval based on the overall response rate and duration of response. Continued approval for this indication may be contingent upon verification and description of clinical benefit in a confirmatory trial(s).[L45548]
- the treatment of pediatric patients one year of age and older with low-grade glioma (LGG) with a BRAF V600E mutation who require systemic therapy.[L45548]

Dabrafenib has limitations of use: it is neither indicated for treating patients with colorectal cancer because of known intrinsic resistance to BRAF inhibition nor wild-type BRAF solid tumours.[L45548]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dabrafenib | parent | 519.562 | C23H20F3N5O2S2 | DrugBank | [44462760](https://pubchem.ncbi.nlm.nih.gov/compound/44462760) | Balakirouchenane_2020 |
| hydroxy-dabrafenib | metabolite | 535.559 | C23H20F3N5O3S2 | PubChem | [57989740](https://pubchem.ncbi.nlm.nih.gov/compound/57989740) | Balakirouchenane_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 20:42 | 1:57 | 0/2/1 | 0/0/0 | 0/0/0 | 40,609/2,083 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Balakirouchenane_2020_base](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_base.md) | ▶ model + simulator | parent 2-cmt + 1 metabolite (2-cmt) | 10 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Balakirouchenane_2020_final](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final.md) | held back | 1-compartment, oral | 11 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Balakirouchenane_2020_final_final_tra_model](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_final_tra_model.md) | ▶ model + simulator | 1-compartment, oral | 6 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dabrafenib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | bile duct | <sub>“…subsequently excreted in bile…”</sub> | prose |
| metabolism | kidney | <sub>“…excreted in bile and urine…”</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inducer/inhibitor, `CYP2C19` inducer/inhibitor/substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` inducer/inhibitor/substrate, `CYP3A4` inducer/inhibitor/substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…Fecal excretion is the major route of elimination accounting for 71% of radioactive dose…”</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BRAF (inhibitor), LIMK1 (inhibitor), NEK11 (inhibitor), RAF1 (inhibitor), SIK1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Isberner_2022 | irrelevant | not captured | not captured | The study relies on a previously published population PK model to derive empirical Bayesian estimates and reports observed concentrations, but does not present new quantitative disposition parameters or a novel compartmental/popPK model for dabrafenib. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-26 20:40 UTC</sub>
