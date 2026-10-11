<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;asparaginase&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asparaginase_Borghorst2012_reference&quot;,&quot;label&quot;:&quot;Borghorst_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/Asparaginase_Borghorst2012_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Asparaginase_Sassen2017_estimate&quot;,&quot;label&quot;:&quot;Sassen_2017_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/Asparaginase_Sassen2017_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Asparaginase_Sassen2017_median&quot;,&quot;label&quot;:&quot;Sassen_2017_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/Asparaginase_Sassen2017_median.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# asparaginase

- **generic name:** asparaginase
- **ATC codes:** `L01XX02`, `LX1XX02`
- **DrugBank:** [DB00023](https://go.drugbank.com/drugs/DB00023) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Asparaginase is an enzyme medication used as an anticancer drug to treat lymphoma and lymphoid leukemia. It is an approved medicine, included on the WHO list of essential medicines, and is authorised in the European Union for precursor cell lymphoblastic leukemia-lymphoma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105296036](https://www.wikidata.org/wiki/Q105296036) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:22 | 8:23 | 3/3/1 | 1/0/0 | 0/0/0 | 209,944/12,704 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/5 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Borghorst_2012_reference](drugs/drug_asparaginase/Asparaginase_Borghorst2012_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Borghorst S et al., Population pharmacokinetics of native E…, Pediatric hematology and on… (2012) | [10.3109/08880018.2011.627978](https://doi.org/10.3109/08880018.2011.627978) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sassen_2017_estimate](drugs/drug_asparaginase/Asparaginase_Sassen2017_estimate.md) | ▶ model + simulator | 2-compartment, IV | 4 | Sassen SD et al., Population pharmacokinetics of intraven…, Haematologica (2017) | [10.3324/haematol.2016.149195](https://doi.org/10.3324/haematol.2016.149195) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sassen_2017_median](drugs/drug_asparaginase/Asparaginase_Sassen2017_median.md) | ▶ model + simulator | 2-compartment, IV | 4 | Sassen SD et al., Population pharmacokinetics of intraven…, Haematologica (2017) | [10.3324/haematol.2016.149195](https://doi.org/10.3324/haematol.2016.149195) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Lin_2021_reference](drugs/drug_asparaginase/Asparaginase_Lin2021_reference.md) | — | 1-compartment (no model) | 4 | Lin T et al., Population Pharmacokinetic Model Develo…, Clinical pharmacology in dr… (2021) | [10.1002/cpdd.1002](https://doi.org/10.1002/cpdd.1002) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hempel_2010_reference](drugs/drug_asparaginase/Asparaginase_Hempel2010_reference.md) | — | 1-compartment (no model) | 0 | Hempel G et al., A population pharmacokinetic model for…, British journal of haematol… (2010) | [10.1111/j.1365-2141.2009.07923.x](https://doi.org/10.1111/j.1365-2141.2009.07923.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lin_2023_reference](drugs/drug_asparaginase/Asparaginase_Lin2023_reference.md) | — | 1-compartment (no model) | 4 (+1 cov.) | Lin T et al., Population pharmacokinetics of intramus…, Clinical and translational… (2023) | [10.1111/cts.13499](https://doi.org/10.1111/cts.13499) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Völler_2018_reference](drugs/drug_asparaginase/Asparaginase_Vller2018_reference.md) | — | 2-compartment (no model) | 4 | Völler S et al., Pharmacokinetics of recombinant asparag…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-017-3492-5](https://doi.org/10.1007/s00280-017-3492-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Hoeben_2026_TV](drugs/drug_asparaginase/pd_Hoeben_2026_TV.md) | tumor volume ← plasma asparaginase activity · disease-progression model | model (no simulator) | Hoeben E et al., PKPD-Based Translational Modeling of Ca…, European journal of drug me… (2026) | [10.1007/s13318-026-01010-4](https://doi.org/10.1007/s13318-026-01010-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=asparaginase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: L-asparagine (other/unknown), SERPINA7 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 3  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Avramis_2007.pdf` | Avramis VI et al., Clinical pharmacology of asparaginases…, Journal of pediatric hemato… (2007) | popPK | 10 | [10.1097/MPH.0b013e318047b79d](https://doi.org/10.1097/MPH.0b013e318047b79d) | [17414566](https://pubmed.ncbi.nlm.nih.gov/17414566) | The paper describes population PK models for asparaginase, but the provided evidence contains only qualitative descriptions and dosing regimens without specific numeric parameter values (CL, V, etc.). |
| `Borghorst_2012.pdf` | Borghorst S et al., Population pharmacokinetics of native E…, Pediatric hematology and on… (2012) | popPK | 10 | [10.3109/08880018.2011.627978](https://doi.org/10.3109/08880018.2011.627978) | [22376019](https://pubmed.ncbi.nlm.nih.gov/22376019) | The paper reports a population pharmacokinetic model for asparaginase with explicit numeric values for clearance, volumes of distribution, and intercompartmental clearance in the text. |
| `Borghorst_2014.pdf` | Borghorst S et al., Comparative pharmacokinetic/pharmacodyn…, Cancer chemotherapy and pha… (2014) | popPK | 10 | [10.1007/s00280-014-2506-9](https://doi.org/10.1007/s00280-014-2506-9) | [24934864](https://pubmed.ncbi.nlm.nih.gov/24934864) | The paper describes a population PK study of asparaginase in dogs and rats, but the specific numeric parameter values are not present in the provided abstract text. |
| `Hempel_2010.pdf` | Hempel G et al., A population pharmacokinetic model for…, British journal of haematol… (2010) | popPK | 10 | [10.1111/j.1365-2141.2009.07923.x](https://doi.org/10.1111/j.1365-2141.2009.07923.x) | [19821822](https://pubmed.ncbi.nlm.nih.gov/19821822) | The paper reports a population pharmacokinetic model for pegylated-asparaginase with explicit numeric values for volume of distribution and initial clearance. |
| `Völler_2018.pdf` | Völler S et al., Pharmacokinetics of recombinant asparag…, Cancer chemotherapy and pha… (2018) | popPK | 10 | [10.1007/s00280-017-3492-5](https://doi.org/10.1007/s00280-017-3492-5) | [29204688](https://pubmed.ncbi.nlm.nih.gov/29204688) | The paper reports a population PK model for asparaginase with specific numeric values for CL, V1, Q, and V2 in the abstract. |
| `Avramis_2007_2.pdf` | Avramis VI et al., Pharmacoanalytical assays of Erwinia as…, Anticancer research (2007) | popPK | 8 | not captured | [17695416](https://pubmed.ncbi.nlm.nih.gov/17695416) | The study reports a population PK-PD model for Erwinia asparaginase in humans, but the evidence only provides the average half-life (15.8 h) and lacks specific numeric values for clearance, volume of distribution, or intercompartmental clearance. |

<sub>queue written 2026-10-07T23:15:36.823182+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajewole_2018 | irrelevant | 0 | 0 | The paper investigates the structural and biochemical properties of plant asparaginases (Phaseolus vulgaris) and is not a pharmacokinetic study of the drug asparaginase in humans or animals. |
| popPK | Appel_2008 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (amino acid depletion, apoptosis) and clinical response rather than reporting quantitative pharmacokinetic parameters like clearance or volume of distribution for asparaginase. |
| popPK | Avramis_2005 | irrelevant | 2 | 0 | The paper is a review discussing PK/PD relationships and model concepts but does not report specific quantitative disposition parameters (CL, V, t1/2) for asparaginase in the provided text. |
| popPK | Avramis_2007 | relevant | 10 | 0 | The paper describes population PK models for asparaginase, but the provided evidence contains only qualitative descriptions and dosing regimens without specific numeric parameter values (CL, V, etc.). |
| popPK | Avramis_2007_2 | relevant | 8 | 3 | The study reports a population PK-PD model for Erwinia asparaginase in humans, but the evidence only provides the average half-life (15.8 h) and lacks specific numeric values for clearance, volume of distribution, or intercompartmental clearance. |
| popPK | Borghorst_2014 | relevant | 10 | 2 | The paper describes a population PK study of asparaginase in dogs and rats, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Hoeben_2026 | relevant | 9 | 2 | The paper describes a population PK model for Calaspargase Pegol (asparaginase) in humans and mice, but the specific numeric parameter values are located in Table 1 and Supplementary Tables which are not included in the provided evidence. |
| popPK | Keating_1993 | irrelevant | 2 | 0 | The paper is a review that mentions a one-compartment model and half-life but does not provide specific numeric values for clearance, volume, or half-life in the provided text. |
| popPK | Maese_2023 | relevant | 9 | 2 | The paper describes a population PK model for asparaginase (JZP458) in humans, but the specific numeric parameter values (CL, V, Q, ka) are not provided in the text, likely residing in supplementary material or figures. |
| popPK | Maqsood_2020 | irrelevant | 0 | 0 | The paper describes the biochemical characterization and molecular docking of a recombinant enzyme in vitro, not the pharmacokinetics of asparaginase in a biological subject. |
| popPK | Porta-Oltra_2021 | irrelevant | 1 | 0 | This is a non-systematic literature review that mentions asparaginase only in the context of general therapeutic monitoring benefits without reporting specific quantitative PK parameters or original data. |
| popPK | Sassen_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ciprofloxacin, not asparaginase, which is only mentioned as a covariate with no significant effect. |
| popPK | Yun_2007 | irrelevant | 0 | 0 | The paper describes the crystal structure and enzymatic kinetics of E. coli asparaginase, not the pharmacokinetics of asparaginase as a therapeutic drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:16 UTC</sub>
