<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;ajmaline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ajmaline_Iven1977_reference&quot;,&quot;label&quot;:&quot;Iven_1977_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ajmaline

- **generic name:** ajmaline
- **ATC codes:** `C01BA05`
- **DrugBank:** [DB01426](https://go.drugbank.com/drugs/DB01426) · **PubChem:** [CID 441080](https://pubchem.ncbi.nlm.nih.gov/compound/441080)
- **molar mass:** 326.4326 g/mol (C20H26N2O2) — DrugBank
- **groups:** approved, withdrawn

## About

Ajmaline is a class Ia antiarrhythmic, a sodium channel blocker used to treat heart rhythm disorders. It has been withdrawn from use in some markets, though it remains approved elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q385858](https://www.wikidata.org/wiki/Q385858) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ajmaline | parent | 326.433 | C20H26N2O2 | DrugBank | [441080](https://pubchem.ncbi.nlm.nih.gov/compound/441080) | Elfner_1987, Iven_1977, Yasuhara_1987 |
| n-propyl-ajmaline | metabolite | 369.529 | C23H33N2O2+ | PubChem | [76959818](https://pubchem.ncbi.nlm.nih.gov/compound/76959818) | Elfner_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 15:52 | 20:14 | 1/4/1 | 2/0/1 | 0/0/1 | 207,433/60,541 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 6/2 | 3/5 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Iven_1977_reference](drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Iven H, The pharmacokinetics and organ distribu…, Naunyn-Schmiedeberg's archi… (1977) | [10.1007/BF00510985](https://doi.org/10.1007/BF00510985) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.154). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q59 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Elfner_1987_reference](drugs/drug_ajmaline/Ajmaline_Elfner1987_reference.md) | — | 1-compartment (no model) | 8 | Elfner R et al., Pharmacokinetics of n-propyl-ajmaline-b…, European journal of drug me… (1987) | [10.1007/BF03189865](https://doi.org/10.1007/BF03189865) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yasuhara_1987_dog_1](drugs/drug_ajmaline/Ajmaline_Yasuhara1987_dog_1.md) | — | 1-compartment (no model) | 5 | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yasuhara_1987_dog_2](drugs/drug_ajmaline/Ajmaline_Yasuhara1987_dog_2.md) | — | 1-compartment (no model) | 5 | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yasuhara_1987_dog_3](drugs/drug_ajmaline/Ajmaline_Yasuhara1987_dog_3.md) | — | 1-compartment (no model) | 5 | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yasuhara_1987_dog_4](drugs/drug_ajmaline/Ajmaline_Yasuhara1987_dog_4.md) | — | 1-compartment (no model) | 5 | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bébarová_2005_ICa_L](drugs/drug_ajmaline/pd_B_barov_2005_ICa_L.md) | L-type calcium current ← ajmaline · direct sigmoid Emax (Hill) effect | — | Bébarová M et al., Effect of ajmaline on action potential…, General physiology and biop… (2005) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bébarová_2005_IK_ATP](drugs/drug_ajmaline/pd_B_barov_2005_IK_ATP.md) | ATP-sensitive potassium current ← ajmaline · direct sigmoid Emax (Hill) effect | — | Bébarová M et al., Effect of ajmaline on action potential…, General physiology and biop… (2005) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bébarová_2005_INa](drugs/drug_ajmaline/pd_B_barov_2005_INa.md) | fast sodium current ← ajmaline · direct sigmoid Emax (Hill) effect | — | Bébarová M et al., Effect of ajmaline on action potential…, General physiology and biop… (2005) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bébarová_2005_Ito](drugs/drug_ajmaline/pd_B_barov_2005_Ito.md) | transient outward potassium current ← ajmaline · direct sigmoid Emax (Hill) effect | — | Bébarová M et al., Effect of ajmaline on action potential…, General physiology and biop… (2005) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bébarová_2005_current_measured_at_the_end_of_300_ms_depolarizing_impulse](drugs/drug_ajmaline/pd_B_barov_2005_current_measured_at_the_end_of_300_ms_depolariz.md) | current measured at the end of 300 ms depolarizing impulse ← ajmaline · direct sigmoid Emax (Hill) effect | — | Bébarová M et al., Effect of ajmaline on action potential…, General physiology and biop… (2005) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other animal</span> | [Friedrich_2007_I_K](drugs/drug_ajmaline/pd_Friedrich_2007_I_K.md) | I K ← ajmaline · direct sigmoid Emax (Hill) effect | — | Friedrich O et al., NA+- and K+-channels as molecular targe…, British journal of pharmaco… (2007) | [10.1038/sj.bjp.0707194](https://doi.org/10.1038/sj.bjp.0707194) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other animal</span> | [Friedrich_2007_I_Na](drugs/drug_ajmaline/pd_Friedrich_2007_I_Na.md) | I Na ← ajmaline · direct sigmoid Emax (Hill) effect | — | Friedrich O et al., NA+- and K+-channels as molecular targe…, British journal of pharmaco… (2007) | [10.1038/sj.bjp.0707194](https://doi.org/10.1038/sj.bjp.0707194) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Yasuhara_1987_PQ](drugs/drug_ajmaline/pd_Yasuhara_1987_PQ.md) | PQ interval change ← ajmaline · delayed effect through an effect compartment | model (no simulator) | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Yasuhara_1987_QRS](drugs/drug_ajmaline/pd_Yasuhara_1987_QRS.md) | QRS interval change ← ajmaline · delayed effect through an effect compartment | model (no simulator) | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Köppel_1989](drugs/drug_ajmaline/pgx_K_ppel_1989_CYP2D6_Q100.md) | Köppel C et al., Metabolic disposition of ajmaline, European journal of drug me… (1989) | [10.1007/BF03190117](https://doi.org/10.1007/BF03190117) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ajmaline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ORM1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism | paper PGx gene |
| metabolism | liver | `CYP2D6` metabolism | paper PGx gene |

<sub>Actors without a tissue in the table: SCN5A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 31 returned
- **screened:** 8  ·  **relevant:** 4
- **records:** 6  ·  extracted 1  ·  needs_review 1  ·  rejected 4  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Spilker_1975.pdf` | Spilker B et al., Cardiovascular effects and blood concen…, Archives internationales de… (1975) | popPK | 8 | not captured | [1164107](https://pubmed.ncbi.nlm.nih.gov/1164107) | The study reports quantitative PK parameters for ajmaline in cats, specifically a half-life of 100 min and peak blood level timing, though full compartmental parameters (CL, V) are not explicitly listed in the text. |
| `Miao_2025.pdf` | Miao Z et al., Zebrafish embryos as a teratogenicity s…, Reproductive toxicology (El… (2025) | pd | 5 | [10.1016/j.reprotox.2025.108895](https://doi.org/10.1016/j.reprotox.2025.108895) | [40097051](https://www.ncbi.nlm.nih.gov/pubmed/40097051) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-08T15:46:52.724249+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alvarez_1992 | irrelevant | 0 | 0 | The study investigates the electrophysiological mechanism of action of prajmalium (an ajmaline derivative) in rabbit cardiomyocytes and does not report pharmacokinetic parameters for ajmaline. |
| popPK | Bébarová_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ionic currents and action potentials, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Friedrich_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ajmaline's effects on ion channels in frog muscle, reporting IC50 values for channel blockade rather than pharmacokinetic disposition parameters. |
| popPK | Miao_2025 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Miao_2025 | not_relevant | 0 | 0 | The paper focuses on zebrafish teratogenicity screening and does not report any pharmacodynamic or exposure-response data for ajmaline. |
| popPK | Rukachaisirikul_2017 | irrelevant | 0 | 0 | The paper is a phytochemical study on the isolation and structural elucidation of alkaloids from plant roots, containing no pharmacokinetic data. |
| PD | Rukachaisirikul_2017 | not_relevant | 0 | 0 | The paper is a phytochemical isolation study reporting the identification of alkaloids; it does not report a pharmacodynamic or exposure-response relationship for ajmaline, only mentioning its isolation. |
| PGx | Sheludko_2020 | not_relevant | 0 | 0 | The paper focuses on the biosynthesis of plant alkaloids using CYP3A4, not on the pharmacokinetics or pharmacodynamics of ajmaline in humans. |
| PD | Si_0000 | not_relevant | 0 | 0 | The paper reports IC50 values for novel compounds (nutanosides/nutanesters) and mentions ajmaline only as a structural class reference, providing no pharmacodynamic or exposure-response data for ajmaline itself. |
| popPK | Yasuhara_1987 | relevant | 9 | 0 | The study reports a two-compartment PK model for ajmaline in dogs, but the specific numeric parameter values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-08 15:33 UTC</sub>
