<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;trimethoprim&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimethoprim_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trimethoprim_Tu1989_reference&quot;,&quot;label&quot;:&quot;Tu_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# trimethoprim

- **generic name:** trimethoprim
- **ATC codes:** `J01EA01`, `J01EE01`, `J01EE02`, `J01EE03`, `J01EE04`, `J01EE05`, `J01EE07`, `J04AM08`
- **DrugBank:** [DB00440](https://go.drugbank.com/drugs/DB00440) · **PubChem:** [CID 5578](https://pubchem.ncbi.nlm.nih.gov/compound/5578)
- **molar mass:** 290.3177 g/mol (C14H18N4O3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Trimethoprim is an antibiotic used to treat bacterial infections, especially urinary tract infections, and is also used against infections such as toxoplasmosis and pneumocystosis. It remains widely used, appears on the WHO list of essential medicines, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422665](https://www.wikidata.org/wiki/Q422665) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trimethoprim | parent | 290.318 | C14H18N4O3 | DrugBank | [5578](https://pubchem.ncbi.nlm.nih.gov/compound/5578) | Boulanger_2024, Chen_2025, Ekstrand_2022, Ekstrand_2026, Leegwater_2025, Tu_1989 |
| N-acetyl sulfamethoxazole | metabolite | 295.313 | C12H13N3O4S | PubChem | [65280](https://pubchem.ncbi.nlm.nih.gov/compound/65280) | Leegwater_2025 |
| sulfamethoxazole | metabolite | 253.276 | C10H11N3O3S | PubChem | [5329](https://pubchem.ncbi.nlm.nih.gov/compound/5329) | Leegwater_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:20 | 5:45 | 2/3/1 | 1/0/1 | 0/0/0 | 253,892/18,786 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Ekstrand_2026_reference](drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md) | ▶ model + simulator | 3-compartment, oral | 7 | Ekstrand C et al., Comparative pharmacokinetics of trimeth…, BMC veterinary research (2026) | [10.1186/s12917-026-05604-7](https://doi.org/10.1186/s12917-026-05604-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Tu_1989_reference](drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Tu YH et al., Pharmacokinetics of trimethoprim in the…, Journal of pharmaceutical s… (1989) | [10.1002/jps.2600780709](https://doi.org/10.1002/jps.2600780709) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q357 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Leegwater_2025_reference](drugs/drug_trimethoprim/Trimethoprim_Leegwater2025_reference.md) | — | parent + metabolite (no model) | 5 (+1 cov.) | Leegwater E et al., Population Pharmacokinetics of Trimetho…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3421](https://doi.org/10.1002/cpt.3421) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Boulanger_2024_reference](drugs/drug_trimethoprim/Trimethoprim_Boulanger2024_reference.md) | — | general linear (no model) | 9 | Boulanger M et al., Pharmacokinetic modeling of sulfamethox…, Poultry science (2024) | [10.1016/j.psj.2024.104200](https://doi.org/10.1016/j.psj.2024.104200) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chen_2025_reference](drugs/drug_trimethoprim/Trimethoprim_Chen2025_reference.md) | — | general linear (no model) | 3 | Chen B et al., Population pharmacokinetics and Monte C…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00519-25](https://doi.org/10.1128/aac.00519-25) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ekstrand_2022_reference](drugs/drug_trimethoprim/Trimethoprim_Ekstrand2022_reference.md) | — | general linear (no model) | 10 | Ekstrand C et al., The disposition of trimethoprim and sul…, Veterinary medicine and sci… (2022) | [10.1002/vms3.763](https://doi.org/10.1002/vms3.763) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Torumkuney_2020_antibiotic_susceptibility](drugs/drug_trimethoprim/pd_Torumkuney_2020_antibiotic_susceptibility.md) | antibiotic susceptibility ← trimethoprim · model not identified | — | Torumkuney D et al., Results from the Survey of Antibiotic R…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkaa084](https://doi.org/10.1093/jac/dkaa084) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Mead_2026_CFU_mL_1](drugs/drug_trimethoprim/pd_Mead_2026_CFU_mL_1.md) | Bacterial population density ← Trimethoprim · direct Emax (saturable) effect | model (no simulator) | Mead A et al., Pharmacodynamic interaction between tri…, Journal of applied microbio… (2026) | [10.1093/jambio/lxag106](https://doi.org/10.1093/jambio/lxag106) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trimethoprim) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC47A1` inhibitor/substrate, `SLC47A2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DHFR (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 106 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 6  ·  extracted 2  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Autmizguine_2018.pdf` | Autmizguine J et al., Population Pharmacokinetics of Trimetho…, Antimicrobial agents and ch… (2018) | popPK | 10 | [10.1128/AAC.01813-17](https://doi.org/10.1128/AAC.01813-17) | [29084742](https://pubmed.ncbi.nlm.nih.gov/29084742) | The abstract describes a population PK model for trimethoprim in children but does not provide the specific numeric parameter values (CL, V, etc.), which are likely in the full text or tables not included. |
| `Hess_1993.pdf` | Hess MM et al., Trimethoprim-sulfamethoxazole pharmacok…, Pharmacotherapy (1993) | popPK | 10 | not captured | [8302685](https://pubmed.ncbi.nlm.nih.gov/8302685) | The paper reports quantitative one-compartment pharmacokinetic parameters (volume, half-life, clearance) for trimethoprim in trauma patients. |
| `Tu_1989.pdf` | Tu YH et al., Pharmacokinetics of trimethoprim in the…, Journal of pharmaceutical s… (1989) | popPK | 10 | [10.1002/jps.2600780709](https://doi.org/10.1002/jps.2600780709) | [2778654](https://pubmed.ncbi.nlm.nih.gov/2778654) | The paper reports quantitative compartmental and noncompartmental pharmacokinetic parameters (CL, V, half-life, ke) for trimethoprim in rats, and all values are explicitly listed in the text. |
| `Swain_2020.pdf` | Swain O'Fallon E et al., Pharmacokinetics of a sulfadiazine and…, Journal of veterinary pharm… (2020) | popPK | 9 | [10.1111/jvp.12930](https://doi.org/10.1111/jvp.12930) | [33289123](https://pubmed.ncbi.nlm.nih.gov/33289123) | The study reports quantitative PK parameters (Cmax, Tmax, Cmin, half-life, AUC) for trimethoprim in neonatal foals. |
| `Wang_2026.pdf` | Wang M et al., Population pharmacokinetic modeling and…, European journal of clinica… (2026) | popPK | 6 | [10.1007/s00228-026-04019-5](https://doi.org/10.1007/s00228-026-04019-5) | [41912902](https://pubmed.ncbi.nlm.nih.gov/41912902) | The study is a population PK model for trimethoprim in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the abstract, likely residing in the full text or tables not provided. |

<sub>queue written 2026-10-07T11:15:36.716080+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Autmizguine_2018 | relevant | 10 | 0 | The abstract describes a population PK model for trimethoprim in children but does not provide the specific numeric parameter values (CL, V, etc.), which are likely in the full text or tables not included. |
| popPK | Hirai_2022 | irrelevant | 4 | 0 | The study models trimethoprim's pharmacokinetics as part of a PD model for hyperkalemia, but no quantitative TMP PK parameter values are present in the provided evidence. |
| popPK | Mead_2026 | irrelevant | 1 | 0 | This is a pharmacodynamic (PD) study of antimicrobial synergy in vitro, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, Q, ka) for trimethoprim; the PK parameters used for simulations are cited from external sources, not reported in this paper. |
| popPK | Torumkuney_2020 | irrelevant | 0 | 0 | The study is an antibiotic susceptibility survey using PK/PD breakpoints and does not report quantitative pharmacokinetic parameters for trimethoprim. |
| popPK | Torumkuney_2020_2 | irrelevant | 0 | 0 | The paper reports antimicrobial susceptibility (MICs) of bacterial isolates, not the pharmacokinetic parameters (CL, V, etc.) of trimethoprim. |
| popPK | Torumkuney_2020_3 | irrelevant | 0 | 0 | This is a microbiological susceptibility study reporting MIC data and resistance rates, not a pharmacokinetic study for trimethoprim. |
| popPK | Torumkuney_2020_4 | irrelevant | 0 | 0 | This is an antimicrobial susceptibility study (MICs) and does not report pharmacokinetic parameters for trimethoprim. |
| popPK | Torumkuney_2020_5 | irrelevant | 0 | 0 | The paper is an antibiotic susceptibility surveillance study (MICs and breakpoints) for bacteria, not a pharmacokinetic study of trimethoprim. |
| popPK | Torumkuney_2020_6 | irrelevant | 0 | 0 | The paper is an antibiotic susceptibility survey (MICs) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for trimethoprim. |
| popPK | Torumkuney_2025 | irrelevant | 0 | 0 | This is an antimicrobial susceptibility surveillance study reporting MICs and breakpoint interpretation for bacteria, containing no pharmacokinetic parameters for trimethoprim. |
| popPK | Vouloumanou_2011 | irrelevant | 2 | 0 | The paper is a clinical review of trimethoprim/sulfametrole evidence without original quantitative PK parameter values (CL, V, etc.) for trimethoprim in the provided text. |
| popPK | Wang_2026 | relevant | 6 | 2 | The study is a population PK model for trimethoprim in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the abstract, likely residing in the full text or tables not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:16 UTC</sub>
