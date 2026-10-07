<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;miltefosine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Miltefosine_Dorlo2017_reference&quot;,&quot;label&quot;:&quot;Dorlo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Miltefosine_Pali2020_reference&quot;,&quot;label&quot;:&quot;Pali\u0107_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Pali2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Miltefosine_Verrest2023_reference&quot;,&quot;label&quot;:&quot;Verrest_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Verrest2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# miltefosine

- **generic name:** miltefosine
- **ATC codes:** `P01CX04`
- **DrugBank:** [DB09031](https://go.drugbank.com/drugs/DB09031) · **PubChem:** [CID 3599](https://pubchem.ncbi.nlm.nih.gov/compound/3599)
- **molar mass:** 407.576 g/mol (C21H46NO4P) — DrugBank
- **groups:** approved, investigational

## About

Miltefosine is a phospholipid drug used as an antiprotozoal agent against leishmaniasis and trypanosomiasis, and it also has antifungal, antibacterial and anticancer activity. It is an approved medicine, included on the WHO essential medicines list, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411787](https://www.wikidata.org/wiki/Q411787) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| miltefosine | parent | 407.576 | C21H46NO4P | DrugBank | [3599](https://pubchem.ncbi.nlm.nih.gov/compound/3599) | Dorlo_2008, Dorlo_2017, Kip_2018, Madu_2023, Palić_2020, Verrest_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:04 | 13:51 | 3/2/3 | 4/0/0 | 0/0/0 | 672,717/43,802 | ollama / glm-5.3-flash | 13 | 2/11 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dorlo_2017_reference](drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Dorlo TPC et al., Visceral leishmaniasis relapse hazard i…, The Journal of antimicrobia… (2017) | [10.1093/jac/dkx283](https://doi.org/10.1093/jac/dkx283) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Palić_2020_reference](drugs/drug_miltefosine/Miltefosine_Pali2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 (+1 cov.) | Palić S et al., Characterizing the non-linear pharmacok…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkaa314](https://doi.org/10.1093/jac/dkaa314) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Verrest_2023_reference](drugs/drug_miltefosine/Miltefosine_Verrest2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Verrest L et al., Population pharmacokinetics of a combin…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkad286](https://doi.org/10.1093/jac/dkad286) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Dorlo_2008_reference](drugs/drug_miltefosine/Miltefosine_Dorlo2008_reference.md) | — | 2-compartment (no model) | 3 | Dorlo TP et al., Pharmacokinetics of miltefosine in Old…, Antimicrobial agents and ch… (2008) | [10.1128/AAC.00014-08](https://doi.org/10.1128/AAC.00014-08) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49, Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Madu_2023_initial_value](drugs/drug_miltefosine/Miltefosine_Madu2023_initial_value.md) | — | 1-compartment (no model) | 8 | Madu SJ et al., Assessing Dose-Exposure-Response Relati…, Pharmaceutical research (2023) | [10.1007/s11095-023-03610-0](https://doi.org/10.1007/s11095-023-03610-0) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49, Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Madu_2023_optimised_final_value_for_adults_children](drugs/drug_miltefosine/Miltefosine_Madu2023_optimised_final_value_for_adults_childr.md) | — | 1-compartment (no model) | 8 | Madu SJ et al., Assessing Dose-Exposure-Response Relati…, Pharmaceutical research (2023) | [10.1007/s11095-023-03610-0](https://doi.org/10.1007/s11095-023-03610-0) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dorlo_2012_reference](drugs/drug_miltefosine/Miltefosine_Dorlo2012_reference.md) | — | 1-compartment (no model) | 0 | Dorlo TP et al., Optimal dosing of miltefosine in childr…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.00292-12](https://doi.org/10.1128/AAC.00292-12) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kip_2018_reference](drugs/drug_miltefosine/Miltefosine_Kip2018_reference.md) | — | 1-compartment (no model) | 3 | Kip AE et al., Simultaneous population pharmacokinetic…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky143](https://doi.org/10.1093/jac/dky143) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kaur_2015_inhibition](drugs/drug_miltefosine/pd_Kaur_2015_inhibition.md) | percentage inhibition of infected macrophages (Leishmania donovani intracellular amastigote–macrophage model) ← miltefosine · direct sigmoid Emax (Hill) effect | — | Kaur H et al., Chemical and bioassay techniques to aut…, The American journal of tro… (2015) | [10.4269/ajtmh.14-0586](https://doi.org/10.4269/ajtmh.14-0586) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Madu_2023_PBMC_concentration](drugs/drug_miltefosine/pd_Madu_2023_PBMC_concentration.md) | Miltefosine intracellular concentration in PBMCs ← miltefosine · direct linear effect | model (no simulator) | Madu SJ et al., Assessing Dose-Exposure-Response Relati…, Pharmaceutical research (2023) | [10.1007/s11095-023-03610-0](https://doi.org/10.1007/s11095-023-03610-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Verrest_2024_parasite_load](drugs/drug_miltefosine/pd_Verrest_2024_parasite_load.md) | blood parasite load (Leishmania kDNA qPCR) ← miltefosine · direct linear effect | model (no simulator) | Verrest L et al., Leishmania blood parasite dynamics duri…, PLoS neglected tropical dis… (2024) | [10.1371/journal.pntd.0012078](https://doi.org/10.1371/journal.pntd.0012078) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Voak_2018_F_t](drugs/drug_miltefosine/pd_Voak_2018_F_t.md) | fraction of infected cells ← miltefosine (apparent intracellular concentration) · direct sigmoid Emax (Hill) effect | — | Voak AA et al., Pharmacodynamics and cellular accumulat…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky014](https://doi.org/10.1093/jac/dky014) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=miltefosine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PLA2G1B (inhibitor), PLD1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 71 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 8  ·  extracted 3  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dorlo_2012.pdf` | Dorlo TP et al., Optimal dosing of miltefosine in childr…, Antimicrobial agents and ch… (2012) | popPK | 10 | [10.1128/AAC.00292-12](https://doi.org/10.1128/AAC.00292-12) | [22585212](https://pubmed.ncbi.nlm.nih.gov/22585212) | Population PK model of miltefosine in VL patients with quantitative parameters (CL variability, Cmax) reported in abstract, though full parameter estimates may be in tables/supplements. |
| `Kip_2018.pdf` | Kip AE et al., Simultaneous population pharmacokinetic…, The Journal of antimicrobia… (2018) | popPK | 10 | [10.1093/jac/dky143](https://doi.org/10.1093/jac/dky143) | [29757380](https://pubmed.ncbi.nlm.nih.gov/29757380) | Population PK model of miltefosine in humans with some numeric parameters (ratio 2.17, k 1.23/day) in abstract, but full CL/V estimates likely in tables/supplementary not shown. |
| `Dorlo_2014.pdf` | Dorlo TP et al., Failure of miltefosine in visceral leis…, The Journal of infectious d… (2014) | popPK | 8 | [10.1093/infdis/jiu039](https://doi.org/10.1093/infdis/jiu039) | [24443541](https://pubmed.ncbi.nlm.nih.gov/24443541) | A population PK-PD analysis of miltefosine in VL patients, but the abstract reports only exposure-effect statistics, not CL/V/ka values, which likely reside in tables or supplementary material not provided. |

<sub>queue written 2026-10-07T07:51:44.777689+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brannigan_2025 | irrelevant | 0 | 0 | This is a structural/biochemical study of a Leishmania deubiquitinase; miltefosine is only mentioned as a comparator drug in EC50 viability assays, with no PK parameters. |
| popPK | Chu_2026 | irrelevant | 3 | 2 | Reports skin-to-plasma concentration ratios and PK target attainment, but no disposition parameters (CL, V, half-life, or PK model) for miltefosine; numeric values present are ratios, not PK parameters. |
| popPK | Dorlo_2014 | relevant | 8 | 2 | A population PK-PD analysis of miltefosine in VL patients, but the abstract reports only exposure-effect statistics, not CL/V/ka values, which likely reside in tables or supplementary material not provided. |
| popPK | Henriquez-Figuereo_2023 | irrelevant | 0 | 0 | This is an in-vitro drug-discovery study of selenocyanate/diselenide derivatives; miltefosine appears only as a reference/comparator drug with EC50 values, and no PK parameters (CL, V, half-life, or PK model) for miltefosine are reported. |
| popPK | Kaur_2015 | irrelevant | 0 | 0 | This is a drug-quality/falsification study (NMR, MS, bioassay) with no PK parameters for miltefosine; only a passing mention of half-life without values. |
| popPK | Khamesipour_2025 | irrelevant | 0 | 0 | In-vitro susceptibility study (EC50/EC90) of miltefosine vs OlPC; no PK disposition parameters, only a cited half-life range without any PK model. |
| popPK | Khoumeri_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry synthesis and in vitro antileishmanial activity study; miltefosine appears only as a reference comparator (EC50/CC50), with no PK parameters for miltefosine. |
| popPK | Seifert_2006 | irrelevant | 1 | 0 | This is a drug-interaction efficacy study (FICs, AEIs) with no PK disposition parameters for miltefosine. |
| popPK | Verrest_2024 | irrelevant | 3 | 1 | This is a PK-PD model of Leishmania parasite dynamics; miltefosine's PK model is only used as prior input to derive concentrations, and no numeric miltefosine CL/V/ka values appear in the evidence. |
| popPK | Voak_2018 | irrelevant | 3 | 5 | In vitro cellular accumulation/PD model in mouse macrophages, not a disposition PK study; some numeric model parameters (t50, EC50) are present but these are not CL/V/ka-type PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:52 UTC</sub>
