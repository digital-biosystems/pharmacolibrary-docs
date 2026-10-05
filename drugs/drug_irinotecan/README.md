<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;irinotecan&quot;}]"></div>

# irinotecan

- **generic name:** irinotecan
- **ATC codes:** `L01CE02`, `L01XX19`
- **DrugBank:** [DB00762](https://go.drugbank.com/drugs/DB00762) · **PubChem:** [CID 60838](https://pubchem.ncbi.nlm.nih.gov/compound/60838)
- **molar mass:** 586.678 g/mol (C33H38N4O6) — DrugBank
- **groups:** approved, investigational

## About

Irinotecan is a topoisomerase I inhibitor used as an anticancer medicine, mainly for colorectal and pancreatic cancers and also for several other cancers such as lung, breast, stomach and brain tumours. It remains in use, is authorised in the European Union, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412197](https://www.wikidata.org/wiki/Q412197) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 20:08 | 6:35 | 0/19/1 | 0/0/0 | 0/0/0 | 112,851/12,199 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 10/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Adiwijaya_2017_reference](drugs/drug_irinotecan/Irinotecan_Adiwijaya2017_reference.md) | — | parent + metabolite (no model) | 1 | Adiwijaya BS et al., Population Pharmacokinetics of Liposoma…, Clinical pharmacology and t… (2017) | [10.1002/cpt.720](https://doi.org/10.1002/cpt.720) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Friberg_2002_cpt_11](drugs/drug_irinotecan/Irinotecan_Friberg2002_cpt_11.md) | — | 1-compartment (no model) | 1 | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Friberg_2002_dmdc](drugs/drug_irinotecan/Irinotecan_Friberg2002_dmdc.md) | — | 1-compartment (no model) | 1 | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_cliri](drugs/drug_irinotecan/Irinotecan_Zhu2023_cliri.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_clm_sn](drugs/drug_irinotecan/Irinotecan_Zhu2023_clm_sn.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_clsn](drugs/drug_irinotecan/Irinotecan_Zhu2023_clsn.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_fuiri](drugs/drug_irinotecan/Irinotecan_Zhu2023_fuiri.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_fusn](drugs/drug_irinotecan/Irinotecan_Zhu2023_fusn.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_kp_iri](drugs/drug_irinotecan/Irinotecan_Zhu2023_kp_iri.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_kp_sn](drugs/drug_irinotecan/Irinotecan_Zhu2023_kp_sn.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_psiri](drugs/drug_irinotecan/Irinotecan_Zhu2023_psiri.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_qiri](drugs/drug_irinotecan/Irinotecan_Zhu2023_qiri.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_qsn](drugs/drug_irinotecan/Irinotecan_Zhu2023_qsn.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_vc_iri](drugs/drug_irinotecan/Irinotecan_Zhu2023_vc_iri.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_vc_sn](drugs/drug_irinotecan/Irinotecan_Zhu2023_vc_sn.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_vp_iri](drugs/drug_irinotecan/Irinotecan_Zhu2023_vp_iri.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_vp_sn](drugs/drug_irinotecan/Irinotecan_Zhu2023_vp_sn.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_vt](drugs/drug_irinotecan/Irinotecan_Zhu2023_vt.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_vtc](drugs/drug_irinotecan/Irinotecan_Zhu2023_vtc.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_vtis](drugs/drug_irinotecan/Irinotecan_Zhu2023_vtis.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=irinotecan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CES2` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor, `UGT1A1` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `CES2` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TOP1 (inhibitor), TOP1MT (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 95 matched, 20 returned
- **screened:** 15  ·  **relevant:** 2
- **records:** 20  ·  extracted 0  ·  needs_review 1  ·  rejected 19  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chabot_1998.pdf` | Chabot GG et al., [Irinotecan pharmacokinetics], Bulletin du cancer Spec No:… (1998) | popPK | 9 | not captured | [9932079](https://pubmed.ncbi.nlm.nih.gov/9932079) | The abstract reports quantitative irinotecan PK parameters directly (2–3 compartment model, half-life, Vd, and clearance) in the text. |

<sub>queue written 2026-07-18T20:37:12.900137+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Casanova_2023 | irrelevant | 2 | 1 | The paper is mainly about regorafenib plus VI; irinotecan PK is only mentioned as a population model with results apparently in figures/supplementary material not provided here. |
| popPK | Cohn_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of ramucirumab, with irinotecan serving only as a co-administered chemotherapy agent in the FOLFIRI regimen. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for envafolimab (a PD-L1 antibody), not irinotecan. |
| popPK | Hahn_2019 | irrelevant | 3 | 1 | This is a review of irinotecan pharmacokinetics, but no original numeric PK parameters are provided in the evidence and any models are only mentioned generally. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 20:05 UTC</sub>
