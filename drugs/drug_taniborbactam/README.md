<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Taniborbactam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Taniborbactam_Asempa2023_reference&quot;,&quot;label&quot;:&quot;Asempa_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_taniborbactam/Taniborbactam_Asempa2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Taniborbactam_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_taniborbactam/Taniborbactam_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Taniborbactam

- **generic name:** Taniborbactam
- **ATC codes:** not captured
- **DrugBank:** [DB16338](https://go.drugbank.com/drugs/DB16338) · **PubChem:** not captured
- **molar mass:** 389.26 g/mol (C19H28BN3O5) — DrugBank
- **groups:** investigational

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| taniborbactam | parent | 389.26 | C19H28BN3O5 | DrugBank | — | Fouad_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 10:25 | 7:26 | 2/1/0 | 2/0/0 | 0/0/0 | 393,422/23,089 | einfracz / qwen3.8-27b | 12 | 0/10 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Asempa_2023_reference](drugs/drug_taniborbactam/Taniborbactam_Asempa2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Asempa TE et al., Bronchopulmonary disposition of IV cefe…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkac447](https://doi.org/10.1093/jac/dkac447) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Principe_2022_reference](drugs/drug_taniborbactam/Taniborbactam_Principe2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Principe L et al., Microbiological, Clinical, and PK/PD Fe…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15040463](https://doi.org/10.3390/ph15040463) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Fouad_2025_reference](drugs/drug_taniborbactam/Taniborbactam_Fouad2025_reference.md) | — | general linear (no model) | 3 | Fouad A et al., Ex vivo assessment and simulation to gu…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00061-25](https://doi.org/10.1128/aac.00061-25) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Abdelraouf_2023_log10_cfu_lungs](drugs/drug_taniborbactam/pd_Abdelraouf_2023_log10_cfu_lungs.md) | changes in log10 cfu/lungs at 24 h relative to 0 h groups for the composites of examined Enterobacterales ← taniborbactam · direct sigmoid Emax (Hill) effect | — | Abdelraouf K et al., In vivo pharmacokinetic/pharmacodynamic…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkac446](https://doi.org/10.1093/jac/dkac446) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Abdelraouf_2023_log10_cfu_lungs_2](drugs/drug_taniborbactam/pd_Abdelraouf_2023_log10_cfu_lungs_2.md) | changes in log10 cfu/lungs at 24 h relative to 0 h groups for the composites of examined P. aeruginosa isolates ← taniborbactam · direct sigmoid Emax (Hill) effect | — | Abdelraouf K et al., In vivo pharmacokinetic/pharmacodynamic…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkac446](https://doi.org/10.1093/jac/dkac446) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhanel_2024_antimicrobial_activity](drugs/drug_taniborbactam/pd_Zhanel_2024_antimicrobial_activity.md) | antimicrobial activity ← taniborbactam · stimulation effect | — | Zhanel GG et al., Cefepime-Taniborbactam: A Novel Cephalo…, Drugs (2024) | [10.1007/s40265-024-02082-9](https://doi.org/10.1007/s40265-024-02082-9) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 24 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lasko_2022.pdf` | Lasko MJ et al., Clinical exposure-response relationship…, The Journal of antimicrobia… (2022) | pd | 5 | [10.1093/jac/dkab405](https://doi.org/10.1093/jac/dkab405) | [34747449](https://www.ncbi.nlm.nih.gov/pubmed/34747449) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-10-09T10:22:19.357440+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelraouf_2023 | relevant | 5 | 2 | The study reports murine PK/PD parameters for taniborbactam, but the specific numeric PK values (CL, V) are located in supplementary Tables S1-S4 which are not provided in the evidence. |
| popPK | Asempa_2023 | irrelevant | 4 | 2 | The study reports non-compartmental pharmacokinetic parameters (Cmax, AUC) and tissue penetration ratios rather than the quantitative compartmental or population-PK parameters (CL, V, Q, ka) required for the extraction task. |
| popPK | Carcione_2026 | irrelevant | 2 | 3 | The paper is a review primarily focused on cefepime, and while it cites some PK parameters (Vd, t1/2) for taniborbactam, it lacks the primary focus or detailed compartmental/population model data required for high relevance. |
| popPK | Comini_2026 | irrelevant | 0 | 0 | The paper is a review focusing on in vitro activity and mechanisms, and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for taniborbactam. |
| PGx | Comini_2026 | not_relevant | 0 | 0 | The paper is a review discussing mechanisms of action, clinical evidence, and resistance mechanisms of cefepime combinations (including taniborbactam), but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Gatti_2026 | not_relevant | 0 | 0 | The paper is a clinical review discussing the therapeutic role of novel beta-lactams in resistant infections; it does not report a pharmacogenomic effect of a gene variant on the PK or PD of taniborbactam. |
| popPK | Gulyás_2025 | irrelevant | 0 | 0 | The paper is a structural biology and in-vitro pharmacodynamics study of new phosphonic acid inhibitors, and taniborbactam is only mentioned as a comparator for IC50 values, with no PK parameters reported. |
| popPK | Khalid_2023 | irrelevant | 0 | 0 | The paper is a review of PK/PD modeling for other antibiotics (ceftazidime-avibactam, omadacycline, etc.) and only mentions taniborbactam in passing without providing any pharmacokinetic parameters for it. |
| popPK | Lasko_2022 | irrelevant | 1 | 0 | This is a murine pharmacodynamic/efficacy study assessing bacterial killing, and it does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for taniborbactam. |
| PGx | Moeck_2024 | not_relevant | 0 | 0 | The study reports microbiological outcomes and pathogen resistance mechanisms (genotypes of the bacteria), not human pharmacogenomic variations affecting PK/PD. |
| popPK | Principe_2022 | irrelevant | 3 | 2 | The paper is a review; it cites non-compartmental PK parameters (Vd, t1/2, renal Cl) for taniborbactam from a Phase 1 trial in humans, but lacks a compartmental or population-PK model. |
| PGx | Van_2025 | not_relevant | 0 | 0 | The text discusses the pharmacokinetics and resistance mechanisms of the drug, but does not report any pharmacogenomic effects (e.g., genetic variants altering drug PK/PD). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 10:22 UTC</sub>
