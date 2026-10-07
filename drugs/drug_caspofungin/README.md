<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;caspofungin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Caspofungin_AbdulAziz2025_reference&quot;,&quot;label&quot;:&quot;Abdul-Aziz_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caspofungin/Caspofungin_AbdulAziz2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Caspofungin_BorsukDe2020_reference&quot;,&quot;label&quot;:&quot;Borsuk-De_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# caspofungin

- **generic name:** caspofungin
- **ATC codes:** `J02AX04`
- **DrugBank:** [DB00520](https://go.drugbank.com/drugs/DB00520) · **PubChem:** [CID 3035406](https://pubchem.ncbi.nlm.nih.gov/compound/3035406)
- **molar mass:** 1093.331 g/mol (C52H88N10O15) — DrugBank
- **groups:** approved, investigational

## About

Caspofungin is an antifungal used to treat candidiasis and aspergillosis. It is an approved, systemically used antifungal and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420875](https://www.wikidata.org/wiki/Q420875) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| caspofungin | parent | 1093.33 | C52H88N10O15 | DrugBank | [3035406](https://pubchem.ncbi.nlm.nih.gov/compound/3035406) | Abdul-Aziz_2025, Borsuk-De_2020, Wu_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:26 | 4:18 | 2/2/0 | 0/0/1 | 0/0/0 | 169,883/13,400 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdul-Aziz_2025_reference](drugs/drug_caspofungin/Caspofungin_AbdulAziz2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Abdul-Aziz MH et al., Population pharmacokinetics of caspofun…, Antimicrobial agents and ch… (2025) | [10.1128/aac.01435-24](https://doi.org/10.1128/aac.01435-24) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Borsuk-De_2020_reference](drugs/drug_caspofungin/Caspofungin_BorsukDe2020_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Borsuk-De Moor A et al., Nonstationary Pharmacokinetics of Caspo…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.00345-20](https://doi.org/10.1128/AAC.00345-20) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Albanell-Fernández_2025_reference](drugs/drug_caspofungin/Caspofungin_AlbanellFernndez2025_reference.md) | — | 2-compartment (no model) | 3 | Albanell-Fernández M, Echinocandins Pharmacokinetics: A Compr…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01461-5](https://doi.org/10.1007/s40262-024-01461-5) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wu_2022_reference](drugs/drug_caspofungin/Caspofungin_Wu2022_reference.md) | — | 1-compartment (no model) | 0 | Wu Z et al., Population Pharmacokinetics of Caspofun…, Antimicrobial agents and ch… (2022) | [10.1128/aac.02249-21](https://doi.org/10.1128/aac.02249-21) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Caballero_2023_N](drugs/drug_caspofungin/pd_Caballero_2023_N.md) | Number of viable Candida cells ← caspofungin · direct sigmoid Emax (Hill) effect | model (no simulator) | Caballero U et al., PK/PD modeling and simulation of the in…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12949](https://doi.org/10.1002/psp4.12949) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=caspofungin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor, `SLC22A1` unknown, `SLCO1B1` inhibitor, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 63 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pressiat_2022.pdf` | Pressiat C et al., Pharmacokinetics/Pharmacodynamics of Ca…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/AAC.01187-21](https://doi.org/10.1128/AAC.01187-21) | [34662185](https://pubmed.ncbi.nlm.nih.gov/34662185) | The paper describes a population PK model for caspofungin in humans, but the specific numeric parameter estimates (CL, V, etc.) are not provided in the text, likely residing in a table or supplementary material not included. |
| `Pérez-Pitarch_2018.pdf` | Pérez-Pitarch A et al., Dosing of caspofungin based on a pharma…, International journal of an… (2018) | popPK | 10 | [10.1016/j.ijantimicag.2017.05.013](https://doi.org/10.1016/j.ijantimicag.2017.05.013) | [28666752](https://pubmed.ncbi.nlm.nih.gov/28666752) | The study describes a population PK model for caspofungin in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence, likely residing in tables or supplementary files not included. |
| `Yang_2016.pdf` | Yang Q et al., Pharmacokinetic/pharmacodynamic adequac…, International journal of an… (2016) | popPK | 8 | [10.1016/j.ijantimicag.2016.02.004](https://doi.org/10.1016/j.ijantimicag.2016.02.004) | [27068676](https://pubmed.ncbi.nlm.nih.gov/27068676) | Study uses PK/PD modeling for caspofungin but relies on previously published PK data rather than reporting new primary PK parameter values. |

<sub>queue written 2026-10-07T12:23:02.368156+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albanell-Fernández_2025 | irrelevant | 2 | 5 | This is a review summarizing PK parameter ranges from 13 separate studies rather than an original study reporting its own quantitative population model. |
| popPK | Comisar_2014 | irrelevant | 3 | 1 | The study reports exposure-response relationships (odds ratios) using AUC and trough concentrations, but does not report the quantitative population pharmacokinetic parameter estimates (CL, V, Q) or compartmental model parameters required. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tacrolimus, not caspofungin (caspofungin is only mentioned as a concomitant covariate). |
| popPK | Meng_2025 | irrelevant | 3 | 0 | The study reports therapeutic drug monitoring (Cmin) data and exposure-response relationships but does not derive or report quantitative population pharmacokinetic model parameters (e.g., CL, V, Q, ka). |
| popPK | Pressiat_2022 | relevant | 10 | 2 | The paper describes a population PK model for caspofungin in humans, but the specific numeric parameter estimates (CL, V, etc.) are not provided in the text, likely residing in a table or supplementary material not included. |
| popPK | Pérez-Pitarch_2018 | relevant | 10 | 0 | The study describes a population PK model for caspofungin in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence, likely residing in tables or supplementary files not included. |
| popPK | Scott_2020 | irrelevant | 2 | 0 | This is a narrative review summarizing published data without reporting original quantitative PK parameter values for caspofungin in the provided text. |
| popPK | Siopi_2021 | irrelevant | 3 | 0 | The study is an in vitro PK/PD simulation using assumed parameters (fCmax, t1/2) and does not report quantitative disposition parameters (CL, V) derived from a PK model for caspofungin in a biological subject. |
| popPK | Snarr_2017 | irrelevant | 0 | 0 | The study investigates the antibiofilm activity of microbial glycoside hydrolases and their synergistic effect with caspofungin, but it does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for caspofungin. |
| popPK | Venisse_2008 | irrelevant | 2 | 1 | The study uses an in vitro dynamic model with a pre-assumed elimination half-life rather than measuring quantitative disposition parameters for caspofungin in a biological subject. |
| popPK | Xie_2022 | irrelevant | 2 | 0 | This is a Monte Carlo simulation study using pre-existing models to calculate target attainment rates (CFR) rather than a study reporting original population PK parameter estimates (CL, V, Q) for caspofungin. |
| popPK | Yang_2016 | relevant | 8 | 3 | Study uses PK/PD modeling for caspofungin but relies on previously published PK data rather than reporting new primary PK parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:23 UTC</sub>
