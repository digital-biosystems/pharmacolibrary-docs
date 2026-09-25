<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;galcanezumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Galcanezumab_FiedlerKelly2021_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Galcanezumab_Kielbasa2020_final&quot;,&quot;label&quot;:&quot;Kielbasa_2020_final&quot;,&quot;href&quot;:&quot;drugs/drug_galcanezumab/Galcanezumab_Kielbasa2020_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Galcanezumab_Kielbasa2020_base&quot;,&quot;label&quot;:&quot;Kielbasa_2020_base&quot;,&quot;href&quot;:&quot;drugs/drug_galcanezumab/Galcanezumab_Kielbasa2020_base.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# galcanezumab

- **generic name:** galcanezumab
- **ATC codes:** `N02CD02`
- **DrugBank:** [DB14042](https://go.drugbank.com/drugs/DB14042)
- **groups:** approved, investigational

## About

**Description.** Galcanezumab is a humanized monoclonal antibody developed by Eli Lilly and Company against human calcitonin gene-related peptide (CGRP).[A33105] Although several small-molecule CGRP receptor antagonists have been developed, humanized monoclonal antibodies like galcanezumab are specifically designed to selectively bind to CGRP entities with high potency.[A33112] Given this target specificity, lack of off-target toxicity, and characteristic proteolysis profile of immunoglobulin antibodies to not undergo metabolism by liver enzymes, galcanezumab possesses favourable and promising safety and tolerability.[A33112] Galcanezumab was approved by the FDA in September 2018, and is indicated for the preventive treatment of migraine and the treatment of episodic cluster headache.[L42060] It is unknown if galcanezumab has an effect on pregnancy outcomes. A pregnancy exposure registry has been established to evaluate the safety of this drug in pregnant women.[L42060]

**Indication.** Galcanezumab is indicated in adults for the preventive treatment of migraine and the treatment of episodic cluster headache.[L42060]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 05:57 | 3:09 | 1/1/1 | 0/0/0 | 1/0/5 | 80,498/3,404 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: partial</span> | [Fiedler-Kelly_2021_reference](drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md) | Fiedler-Kelly J et al., Relationship of the Calcitonin Gene-Rel…, Clinical pharmacology in dr… (2021) | [10.1002/cpdd.929](https://doi.org/10.1002/cpdd.929) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Kielbasa_2020_final](drugs/drug_galcanezumab/Galcanezumab_Kielbasa2020_final.md) | Kielbasa W et al., Population Pharmacokinetics of Galcanez…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1511](https://doi.org/10.1002/jcph.1511) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kielbasa_2020_base](drugs/drug_galcanezumab/Galcanezumab_Kielbasa2020_base.md) | Kielbasa W et al., Population Pharmacokinetics of Galcanez…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1511](https://doi.org/10.1002/jcph.1511) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.75). The first reading is what the record holds.">cross-check: partial</span> | **MTSS1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_MTSS1_safety.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ACOX2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_ACOX2_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | **ATAD2B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_ATAD2B_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | **LRRC4C** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_LRRC4C_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | **OXR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_OXR1_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **TMEM92-AS1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_TMEM92_AS1_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=galcanezumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>“…d 100%, similar to other monoclonal antibodies.[A249000] Renal and hepatic impairment are…”</sub> | prose |
| absorption | liver | <sub>“…milar to other monoclonal antibodies.[A249000] Renal and hepatic impairment are not expect…”</sub> | prose |
| metabolism | liver | <sub>“….[L42060] Galcanezumab is not believed to be metabolized by liver enzymes, making drug-dru…”</sub> | prose |

<sub>Actors without a tissue in the table: ACOX2 (unknown), ATAD2B (unknown), CALCA (antibody), CALCB (antibody), CALCRL (modulator), LRRC4C (unknown), MTSS1 (safety_allele), OXR1 (unknown), TMEM92-AS1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fiedler-Kelly_2021.pdf` | Fiedler-Kelly J et al., Relationship of the Calcitonin Gene-Rel…, Clinical pharmacology in dr… (2021) | popPK | 10 | [10.1002/cpdd.929](https://doi.org/10.1002/cpdd.929) | [33740315](https://pubmed.ncbi.nlm.nih.gov/33740315) | The evidence explicitly reports quantitative PK parameters (CL, V, ka, tlag, t1/2) for galcanezumab in the text. |

<sub>queue written 2026-09-21T05:55:18.290652+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cho_2026 | irrelevant | 0 | 0 | The paper is a real-world effectiveness and safety study reporting clinical outcomes (headache days) and does not contain any pharmacokinetic parameters for galcanezumab. |
| popPK | Martín-Yeves_2026 | irrelevant | 0 | 0 | The paper is a clinical effectiveness study comparing migraine outcomes and does not report any pharmacokinetic parameters for galcanezumab. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug and drug-food interactions for anti-migraine drugs and does not report pharmacogenomic effects (gene variants) on the PK or PD of galcanezumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 05:55 UTC</sub>
