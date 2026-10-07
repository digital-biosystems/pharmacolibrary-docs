<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;pirfenidone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pirfenidone_Braim2008_reference&quot;,&quot;label&quot;:&quot;Braim_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pirfenidone/Pirfenidone_Braim2008_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pirfenidone

- **generic name:** pirfenidone
- **ATC codes:** `L04AX05`
- **DrugBank:** [DB04951](https://go.drugbank.com/drugs/DB04951) · **PubChem:** [CID 40632](https://pubchem.ncbi.nlm.nih.gov/compound/40632)
- **molar mass:** 185.2218 g/mol (C12H11NO) — DrugBank
- **groups:** approved, investigational

## About

Pirfenidone is used to treat idiopathic pulmonary fibrosis, a form of interstitial lung disease. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2060696](https://www.wikidata.org/wiki/Q2060696) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pirfenidone | parent | 185.222 | C12H11NO | DrugBank | [40632](https://pubchem.ncbi.nlm.nih.gov/compound/40632) | Barranco-Garduño_2020, Braim_2008, Kaminskas_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:11 | 2:09 | 1/2/0 | 0/0/0 | 0/0/0 | 126,708/8,911 | einfracz / qwen3.8-27b | 7 | 3/4 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Braim_2008_reference](drugs/drug_pirfenidone/Pirfenidone_Braim2008_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Braim AE et al., Pharmacokinetics and clinical effects o…, American journal of veterin… (2008) | [10.2460/ajvr.69.7.952](https://doi.org/10.2460/ajvr.69.7.952) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Barranco-Garduño_2020_reference](drugs/drug_pirfenidone/Pirfenidone_BarrancoGarduo2020_reference.md) | — | 1-compartment (no model) | 1 | Barranco-Garduño LM et al., Pharmacokinetic evaluation of two pirfe…, Heliyon (2020) | [10.1016/j.heliyon.2020.e05279](https://doi.org/10.1016/j.heliyon.2020.e05279) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kaminskas_2019_reference](drugs/drug_pirfenidone/Pirfenidone_Kaminskas2019_reference.md) | — | 2-compartment (no model) | 3 | Kaminskas LM et al., Aerosol Pirfenidone Pharmacokinetics af…, Pharmaceutical research (2019) | [10.1007/s11095-019-2732-2](https://doi.org/10.1007/s11095-019-2732-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pirfenidone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP2E1` substrate, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TGFB1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Braim_2008.pdf` | Braim AE et al., Pharmacokinetics and clinical effects o…, American journal of veterin… (2008) | popPK | 10 | [10.2460/ajvr.69.7.952](https://doi.org/10.2460/ajvr.69.7.952) | [18593250](https://pubmed.ncbi.nlm.nih.gov/18593250) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for pirfenidone in horses directly in the abstract. |
| `Park_2026.pdf` | Park S et al., Evidence-Based Exploration of Exposure-…, Clinical therapeutics (2026) | popPK | 10 | [10.1016/j.clinthera.2026.05.013](https://doi.org/10.1016/j.clinthera.2026.05.013) | [42303552](https://pubmed.ncbi.nlm.nih.gov/42303552) | The study describes a population PK model for pirfenidone but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| `Mirkovic_2002.pdf` | Mirkovic S et al., Attenuation of cardiac fibrosis by pirf…, British journal of pharmaco… (2002) | popPK | 8 | [10.1038/sj.bjp.0704539](https://doi.org/10.1038/sj.bjp.0704539) | [11861324](https://pubmed.ncbi.nlm.nih.gov/11861324) | The study reports specific pharmacokinetic parameters (half-life and bioavailability) for pirfenidone in rats, though it is a preclinical study focused on fibrosis with PK data as secondary. |

<sub>queue written 2026-10-07T00:10:04.322277+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delameillieure_2022 | irrelevant | 0 | 0 | The study assesses medication adherence and lung function outcomes in IPF patients, reporting no pharmacokinetic parameters (CL, V, Ka, t1/2). |
| popPK | Khanna_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial (Scleroderma Lung Study III) assessing lung function outcomes (FVC-%) and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for pirfenidone. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The study reports clinical efficacy outcomes (FVC decline) rather than pharmacokinetic disposition parameters. |
| popPK | Lalla_2025 | irrelevant | 0 | 0 | This is a clinical efficacy and tolerability cohort study comparing nintedanib and pirfenidone in IPF patients, containing no pharmacokinetic parameters or models. |
| popPK | Park_2026 | relevant | 10 | 3 | The study describes a population PK model for pirfenidone but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| popPK | Ramos-Mondragón_2012 | irrelevant | 0 | 0 | The study investigates electrophysiological effects on cardiac ion channels (mechanistic) and does not report pharmacokinetic parameters. |
| popPK | Wang_2023 | relevant | 9 | 0 | The paper describes a population pharmacokinetic model for pirfenidone with specific structural details (1-compartment, lag time, food effect) and OFV values, but does not provide the final numeric parameter estimates (CL, V, ka, etc.) in the provided evidence, which likely reside in the main text tables or figures not included here. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The study focuses on the mechanistic pharmacodynamics (bronchodilation and anti-inflammatory effects) of pirfenidone in ex vivo lung slices and in vivo mouse models, without reporting any quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Yuan_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting lung function outcomes (FVC, DLCO) rather than pharmacokinetic parameters (CL, V, ka, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:10 UTC</sub>
