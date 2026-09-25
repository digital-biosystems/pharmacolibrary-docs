<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;daunorubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daunorubicin_Drevin2022_reference&quot;,&quot;label&quot;:&quot;Drevin_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_Hempel2003_reference&quot;,&quot;label&quot;:&quot;Hempel_2003_reference&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_Hempel2003_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# daunorubicin

- **generic name:** daunorubicin
- **ATC codes:** `L01DB02`, `L01XY01`
- **DrugBank:** [DB00694](https://go.drugbank.com/drugs/DB00694)
- **groups:** approved, investigational

## About

**Description.** A very toxic anthracycline aminoglycoside antineoplastic isolated from Streptomyces peucetius and others, used in treatment of leukemia and other neoplasms.

**Indication.** For remission induction in acute nonlymphocytic leukemia (myelogenous, monocytic, erythroid) of adults and for remission induction in acute lymphocytic leukemia of children and adults.

Daunorubicin is indicated in combination with [cytarabine] for the treatment of newly-diagnosed therapy-related acute myeloid leukemia (t-AML) or AML with myelodysplasia-related changes (AML-MRC) in adults and pediatric patients 1 year and older.[L32843]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/2/0 | 0/0/0 | 0/0/0 | not captured | not captured | 16 | 28/0 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: Cl[daunorubicinol], Vd[daunorubicinol], formation_rate left…</sub><br><sub>route_to: `scholar`</sub> | [Drevin_2022_reference](drugs/drug_daunorubicin/Daunorubicin_Drevin2022_reference.md) | Drevin G et al., Daunorubicin and Its Active Metabolite…, Pharmaceutics (2022) | [10.3390/pharmaceutics14040792](https://doi.org/10.3390/pharmaceutics14040792) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hempel_2003_reference](drugs/drug_daunorubicin/Daunorubicin_Hempel2003_reference.md) | Hempel G et al., Population pharmacokinetics of liposoma…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01886.x](https://doi.org/10.1046/j.1365-2125.2003.01886.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wang_2019_reference](drugs/drug_daunorubicin/Daunorubicin_Wang2019_reference.md) | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=daunorubicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `CYP3A5` inducer, `POR` inducer/substrate | DrugBank actor |
| metabolism | lung | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | skin | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inducer | DrugBank actor |
| excretion | bile duct | <sub>“…minated hepatically. 40% of daunorubicin is excreted in the bile while 25% is excreted in…”</sub> | prose |
| excretion | kidney | <sub>“…d in an active form (daunorubicin or daunorubicinol) in the urine.[L35460] In the liposoma…”</sub> | prose |

<sub>Actors without a tissue in the table: ABCC10 (substrate), ABCC6 (substrate), AKR1B1 (substrate), CBR1 (substrate), CBR3 (substrate), DNA (intercalation), TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 20 returned
- **screened:** 3  ·  **relevant:** 8
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Callies_2004.pdf` | Callies S et al., Population pharmacokinetic model for da…, Cancer chemotherapy and pha… (2004) | popPK | 10 | [10.1007/s00280-004-0775-4](https://doi.org/10.1007/s00280-004-0775-4) | [15045528](https://pubmed.ncbi.nlm.nih.gov/15045528) | The paper presents a population pharmacokinetic model for daunorubicin in humans, providing quantitative estimates for clearance, volumes of distribution, and intercompartmental clearances. |
| `Hempel_2010.pdf` | Hempel G et al., Pharmacokinetics of daunorubicin and da…, Pediatric blood & cancer (2010) | popPK | 10 | [10.1002/pbc.22266](https://doi.org/10.1002/pbc.22266) | [19731319](https://pubmed.ncbi.nlm.nih.gov/19731319) | The paper presents a population pharmacokinetic analysis of daunorubicin in pediatric patients, explicitly reporting quantitative compartmental model parameters including clearance, volume of distribution, and intercompartmental clearance. |
| `Krogh-Madsen_2012.pdf` | Krogh-Madsen M et al., Population pharmacokinetics of cytarabi…, Cancer chemotherapy and pha… (2012) | popPK | 10 | [10.1007/s00280-011-1800-z](https://doi.org/10.1007/s00280-011-1800-z) | [22212298](https://pubmed.ncbi.nlm.nih.gov/22212298) | The paper presents a prospective population pharmacokinetic study using NONMEM that reports quantitative two-compartment model parameters (clearance, central volume, and covariate effects) for daunorubicin in AML patients. |
| `Varatharajan_2016.pdf` | Varatharajan S et al., Population pharmacokinetics of Daunorub…, Cancer chemotherapy and pha… (2016) | popPK | 10 | [10.1007/s00280-016-3166-8](https://doi.org/10.1007/s00280-016-3166-8) | [27738808](https://pubmed.ncbi.nlm.nih.gov/27738808) | The study explicitly develops and reports quantitative population pharmacokinetic parameters (CL, V, intercompartmental rates) for daunorubicin using a two-compartment nonlinear mixed-effects model in humans. |
| `Fumagalli_2000.pdf` | Fumagalli L et al., The pharmacokinetics of liposomal encap…, Cancer chemotherapy and pha… (2000) | popPK | 8 | [10.1007/s002800051025](https://doi.org/10.1007/s002800051025) | [10854138](https://pubmed.ncbi.nlm.nih.gov/10854138) | The paper reports quantitative disposition parameters (clearance, volume of distribution, and half-life) for liposomal daunorubicin in human patients. |

<sub>queue written 2026-07-18T02:57:14.373836+00:00 · relevance threshold 5</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 11:23 UTC</sub>
