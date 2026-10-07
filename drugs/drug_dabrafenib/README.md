<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dabrafenib&quot;}]"></div>

# dabrafenib

- **generic name:** dabrafenib
- **ATC codes:** `L01EC02`
- **DrugBank:** [DB08912](https://go.drugbank.com/drugs/DB08912) · **PubChem:** [CID 44462760](https://pubchem.ncbi.nlm.nih.gov/compound/44462760)
- **molar mass:** 519.562 g/mol (C23H20F3N5O2S2) — DrugBank
- **groups:** approved, investigational

## About

Dabrafenib is a BRAF protein kinase inhibitor used to treat melanoma, including metastatic melanoma, and other cancers such as non-small-cell lung carcinoma and glioma. It is an approved cancer medicine, authorised in the European Union, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3011604](https://www.wikidata.org/wiki/Q3011604) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dabrafenib | parent | 519.562 | C23H20F3N5O2S2 | DrugBank | [44462760](https://pubchem.ncbi.nlm.nih.gov/compound/44462760) | Balakirouchenane_2020, Isberner_2022, Ouellet_2014 |
| hydroxy-dabrafenib (dabrafenib, hydroxy-dabrafenib, and trametinib) | metabolite | 535.559 | C23H20F3N5O3S2 | PubChem | [57989740](https://pubchem.ncbi.nlm.nih.gov/compound/57989740) | Balakirouchenane_2020, Isberner_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:18 | 4:59 | 2/2/4 | 1/0/2 | 0/0/0 | 107,564/29,200 | openai / gpt-6-luna | 11 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span> | [Balakirouchenane_2020_final_tra_model](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model.md) | held back | 1-compartment, oral | 6 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Isberner_2022_reference](drugs/drug_dabrafenib/Dabrafenib_Isberner2022_reference.md) | held back | 1-compartment, oral | 3 (+3 cov.) | Isberner N et al., Monitoring of Dabrafenib and Trametinib…, Cancers (2022) | [10.3390/cancers14194566](https://doi.org/10.3390/cancers14194566) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ouellet_2014_reference](drugs/drug_dabrafenib/Dabrafenib_Ouellet2014_reference.md) | — | 1-compartment (no model) | 4 | Ouellet D et al., Population pharmacokinetics of dabrafen…, Journal of clinical pharmac… (2014) | [10.1002/jcph.263](https://doi.org/10.1002/jcph.263) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: not captured</sub> | [Balakirouchenane_2020_base](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_base.md) | — | — (no model) | 0 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: not captured</sub> | [Balakirouchenane_2020_final](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final.md) | — | — (no model) | 0 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: not captured</sub> | [Balakirouchenane_2020_final_final_tra_model](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_final_tra_model.md) | — | — (no model) | 0 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Balakirouchenane_2020_dlt](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_dlt.md) | — | parent + metabolite (no model) | 0 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Balakirouchenane_2020_no_dlt](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_no_dlt.md) | — | parent + metabolite (no model) | 0 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Karhana_2026_number_of_blood_vessels](drugs/drug_dabrafenib/pd_Karhana_2026_number_of_blood_vessels.md) | number of blood vessels ← Dabrafenib · stimulation effect | — | Karhana S et al., Chorioallantoic membrane assay demonstr…, Growth factors (Chur, Switz… (2026) | [10.1080/08977194.2026.2632046](https://doi.org/10.1080/08977194.2026.2632046) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Goldwirt_2021_2_DOR](drugs/drug_dabrafenib/pd_Goldwirt_2021_2_DOR.md) | duration of response ← dabrafenib · time-to-event model | — | Goldwirt L et al., Dabrafenib and trametinib exposure-effi…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04299-x](https://doi.org/10.1007/s00280-021-04299-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Goldwirt_2021_2_PFS](drugs/drug_dabrafenib/pd_Goldwirt_2021_2_PFS.md) | progression-free survival ← dabrafenib · time-to-event model | — | Goldwirt L et al., Dabrafenib and trametinib exposure-effi…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04299-x](https://doi.org/10.1007/s00280-021-04299-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Groenland_2023_OS](drugs/drug_dabrafenib/pd_Groenland_2023_OS.md) | overall survival ← dabrafenib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Groenland_2023_PFS](drugs/drug_dabrafenib/pd_Groenland_2023_PFS.md) | progression-free survival ← dabrafenib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |

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
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inducer/inhibitor, `CYP2C19` inducer/inhibitor/substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` inducer/inhibitor/substrate, `CYP3A4` inducer/inhibitor/substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BRAF (inhibitor), LIMK1 (inhibitor), NEK11 (inhibitor), RAF1 (inhibitor), SIK1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 8  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ouellet_2014.pdf` | Ouellet D et al., Population pharmacokinetics of dabrafen…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.263](https://doi.org/10.1002/jcph.263) | [24408395](https://pubmed.ncbi.nlm.nih.gov/24408395) | Human population-PK model reports numeric dabrafenib clearance and other exposure parameters in the evidence. |

<sub>queue written 2026-10-06T23:13:44.257560+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goldwirt_2021_2 | irrelevant | 3 | 0 | The study evaluates dabrafenib exposure using AUC and trough levels but reports no numeric disposition parameters in the evidence. |
| popPK | Groenland_2023 | irrelevant | 1 | 0 | This human exposure-response study reports no quantitative dabrafenib disposition parameters or numeric dabrafenib exposure values. |
| popPK | Janssen_2020 | irrelevant | 2 | 0 | Dabrafenib is simulated using existing population-PK models, but no dabrafenib disposition parameter values are provided. |
| popPK | Karhana_2026 | irrelevant | 0 | 0 | This is an angiogenesis and cell-line study, not a pharmacokinetic study of dabrafenib. |
| popPK | Kim_2019_2 | irrelevant | 1 | 0 | This is a review and provides no numeric dabrafenib disposition parameters in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:14 UTC</sub>
