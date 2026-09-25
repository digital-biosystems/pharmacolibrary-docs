<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;paclitaxel&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paclitaxel_He2022_reference&quot;,&quot;label&quot;:&quot;He_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paclitaxel/Paclitaxel_He2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paclitaxel_Chen2014_reference&quot;,&quot;label&quot;:&quot;Chen_2014_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paclitaxel/Paclitaxel_Chen2014_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paclitaxel_Cheng2021_estimates_rse&quot;,&quot;label&quot;:&quot;Cheng_2021_estimates_rse&quot;,&quot;href&quot;:&quot;drugs/drug_paclitaxel/Paclitaxel_Cheng2021_estimates_rse.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paclitaxel_Cheng2021_units&quot;,&quot;label&quot;:&quot;Cheng_2021_units&quot;,&quot;href&quot;:&quot;drugs/drug_paclitaxel/Paclitaxel_Cheng2021_units.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paclitaxel_Friberg2002_reference&quot;,&quot;label&quot;:&quot;Friberg_2002_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paclitaxel/Paclitaxel_Friberg2002_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paclitaxel_Li2021_reference&quot;,&quot;label&quot;:&quot;Li_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paclitaxel/Paclitaxel_Li2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paclitaxel_Tsushima2020_reference&quot;,&quot;label&quot;:&quot;Tsushima_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paclitaxel/Paclitaxel_Tsushima2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# paclitaxel

- **generic name:** paclitaxel
- **ATC codes:** `L01CD01`, `L01CD51`
- **DrugBank:** [DB01229](https://go.drugbank.com/drugs/DB01229)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Paclitaxel is a chemotherapeutic agent marketed under the brand name Taxol among others. Used as a treatment for various cancers, paclitaxel is a mitotic inhibitor that was first isolated in 1971 from the bark of the Pacific yew tree which contains endophytic fungi that synthesize paclitaxel. It is available as an intravenous solution for injection and the newer formulation contains albumin-bound paclitaxel marketed under the brand name Abraxane.

**Indication.** Used in the treatment of Kaposi's sarcoma and cancer of the lung, ovarian, and breast. Abraxane® is specfically indicated for the treatment of metastatic breast cancer and locally advanced or metastatic non-small cell lung cancer.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 20:32 | 23:37 | 1/6/0 | 0/0/0 | 0/0/0 | 197,794/63,166 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 5/4 | 9/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.944). The first reading is what the record holds.">cross-check: partial</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: F, Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [He_2022_reference](drugs/drug_paclitaxel/Paclitaxel_He2022_reference.md) | He J et al., Population pharmacokinetics for oral pa…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12799](https://doi.org/10.1002/psp4.12799) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Chen_2014_reference](drugs/drug_paclitaxel/Paclitaxel_Chen2014_reference.md) | Chen (2014) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Cheng_2021_estimates_rse](drugs/drug_paclitaxel/Paclitaxel_Cheng2021_estimates_rse.md) | Cheng S et al., Pharmacokinetic-Pharmacodynamic Modelin…, Pharmaceutics (2021) | [10.3390/pharmaceutics13010092](https://doi.org/10.3390/pharmaceutics13010092) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Cheng_2021_units](drugs/drug_paclitaxel/Paclitaxel_Cheng2021_units.md) | Cheng S et al., Pharmacokinetic-Pharmacodynamic Modelin…, Pharmaceutics (2021) | [10.3390/pharmaceutics13010092](https://doi.org/10.3390/pharmaceutics13010092) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Friberg_2002_reference](drugs/drug_paclitaxel/Paclitaxel_Friberg2002_reference.md) | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Li_2021_reference](drugs/drug_paclitaxel/Paclitaxel_Li2021_reference.md) | Li (2021) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Tsushima_2020_reference](drugs/drug_paclitaxel/Paclitaxel_Tsushima2020_reference.md) | Tsushima (2020) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=paclitaxel) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | lung | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | skin | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…ion, a mean of 71% of the radioactivity was excreted in the feces in 120 hours, and 14% wa…”</sub> | prose |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor/substrate, `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |
| target | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| target | ovary | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (inhibitor), ABCC10 (substrate), BCL2 (inhibitor), NR1I2 (inducer), TUBB1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 257 matched, 20 returned
- **screened:** 16  ·  **relevant:** 1
- **records:** 7  ·  extracted 0  ·  needs_review 1  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delahousse_2024 | irrelevant | 2 | 0 | The paper is a systematic review that mentions paclitaxel as having significant sex-based PK differences but does not report the specific quantitative population-PK parameter values (e.g., CL, V) for paclitaxel in the provided text. |
| popPK | Stodtmann_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for veliparib, not paclitaxel; paclitaxel is only mentioned as a co-administered chemotherapy agent. |
| popPK | Sun_2025 | relevant | 10 | 2 | The study reports a population PK model for paclitaxel, but the specific numeric parameter values (CL, V, Q) are referenced as being in Table 2, which is not included in the provided evidence. |
| popPK | Zuo_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for apatinib, not paclitaxel, which is only mentioned as a co-administered drug affecting apatinib clearance. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 20:29 UTC</sub>
