<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;ajmaline&quot;}]"></div>

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
| ajmaline | parent | 326.433 | C20H26N2O2 | DrugBank | [441080](https://pubchem.ncbi.nlm.nih.gov/compound/441080) | Iven_1977 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 02:01 | 3:57 | 0/1/0 | 3/0/0 | 0/0/0 | 70,064/9,538 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Iven_1977_reference](drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md) | — | 1-compartment (no model) | 1 | Iven H, The pharmacokinetics and organ distribu…, Naunyn-Schmiedeberg's archi… (1977) | [10.1007/BF00510985](https://doi.org/10.1007/BF00510985) |

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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Yasuhara_1987_PQ](drugs/drug_ajmaline/pd_Yasuhara_1987_PQ.md) | PQ interval ← ajmaline · delayed effect through an effect compartment | — | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Yasuhara_1987_QRS](drugs/drug_ajmaline/pd_Yasuhara_1987_QRS.md) | QRS interval ← ajmaline · delayed effect through an effect compartment | — | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ajmaline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ORM1` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: SCN5A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 31 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Elfner_1987.pdf` | Elfner R et al., Pharmacokinetics of n-propyl-ajmaline-b…, European journal of drug me… (1987) | popPK | 10 | [10.1007/BF03189865](https://doi.org/10.1007/BF03189865) | [3609075](https://pubmed.ncbi.nlm.nih.gov/3609075) | The study reports quantitative pharmacokinetic parameters (clearance and volume of distribution) for N-propyl-ajmaline, a specific ajmaline derivative, in human patients. |
| `Iven_1977.pdf` | Iven H, The pharmacokinetics and organ distribu…, Naunyn-Schmiedeberg's archi… (1977) | popPK | 10 | [10.1007/BF00510985](https://doi.org/10.1007/BF00510985) | [882146](https://pubmed.ncbi.nlm.nih.gov/882146) | The study reports quantitative pharmacokinetic parameters (half-lives, volume of distribution) for ajmaline in mice using a two-compartment model. |
| `Yasuhara_1987.pdf` | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | popPK | 9 | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) | [3625478](https://pubmed.ncbi.nlm.nih.gov/3625478) | The study reports a two-compartment PK model for ajmaline in dogs, but the specific numeric parameter values are not present in the provided evidence text. |
| `Hori_1984.pdf` | Hori R et al., Quinidine-induced rise in ajmaline plas…, The Journal of pharmacy and… (1984) | popPK | 8 | [10.1111/j.2042-7158.1984.tb06942.x](https://doi.org/10.1111/j.2042-7158.1984.tb06942.x) | [6144760](https://pubmed.ncbi.nlm.nih.gov/6144760) | The study reports quantitative PK parameters (ka, elimination rate constant, AUC, Cmax) for ajmaline in humans, though specific clearance or volume values are not explicitly listed. |
| `Spilker_1975.pdf` | Spilker B et al., Cardiovascular effects and blood concen…, Archives internationales de… (1975) | popPK | 8 | not captured | [1164107](https://pubmed.ncbi.nlm.nih.gov/1164107) | The study reports quantitative PK parameters for ajmaline in cats, specifically a half-life of 100 min and peak blood level timing, though full compartmental parameters (CL, V) are not explicitly listed in the text. |
| `Miao_2025.pdf` | Miao Z et al., Zebrafish embryos as a teratogenicity s…, Reproductive toxicology (El… (2025) | pd | 5 | [10.1016/j.reprotox.2025.108895](https://doi.org/10.1016/j.reprotox.2025.108895) | [40097051](https://www.ncbi.nlm.nih.gov/pubmed/40097051) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T01:58:33.979945+00:00</sub>

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
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 01:58 UTC</sub>
