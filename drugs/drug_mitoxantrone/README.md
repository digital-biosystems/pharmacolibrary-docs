<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;mitoxantrone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitoxantrone_Brandon2026_reference&quot;,&quot;label&quot;:&quot;Brandon_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/Mitoxantrone_Brandon2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Launay1989_reference&quot;,&quot;label&quot;:&quot;Launay_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/Mitoxantrone_Launay1989_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mitoxantrone

- **generic name:** mitoxantrone
- **ATC codes:** `L01DB07`
- **DrugBank:** [DB01204](https://go.drugbank.com/drugs/DB01204) · **PubChem:** [CID 4212](https://pubchem.ncbi.nlm.nih.gov/compound/4212)
- **molar mass:** 444.4809 g/mol (C22H28N4O6) — DrugBank
- **groups:** approved, investigational

## About

Mitoxantrone is a cytotoxic drug used to treat several cancers, including breast cancer, prostate cancer, lymphoma and acute myeloid leukemia, and is also used in multiple sclerosis. It is an approved medicine, but carries a boxed warning, so its use is restricted to specialist care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q239426](https://www.wikidata.org/wiki/Q239426) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mitoxantrone | parent | 444.481 | C22H28N4O6 | DrugBank | [4212](https://pubchem.ncbi.nlm.nih.gov/compound/4212) | Brandon_2026, Ehninger_1985, Hu_1992, Lacayo_2002, Launay_1989, Schleyer_1994, Xu_2024 |
| dicarboxylic acid | metabolite | — (mass units only) | — | — | — | — |
| monocarboxylic acid | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:41 | 12:29 | 2/3/5 | 4/1/0 | 0/0/0 | 239,139/61,280 | openai / gpt-6-luna | 7 | 1/6 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Brandon_2026_reference](drugs/drug_mitoxantrone/Mitoxantrone_Brandon2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+2 cov.) | Brandon AM et al., Population pharmacokinetics and dose-re…, British journal of clinical… (2026) | [10.1002/bcp.70436](https://doi.org/10.1002/bcp.70436) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Launay_1989_reference](drugs/drug_mitoxantrone/Mitoxantrone_Launay1989_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Launay MC et al., Population pharmacokinetics of mitoxant…, Journal of pharmaceutical s… (1989) | [10.1002/jps.2600781020](https://doi.org/10.1002/jps.2600781020) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Ehninger_1985_reference](drugs/drug_mitoxantrone/Mitoxantrone_Ehninger1985_reference.md) | — | 1-compartment (no model) | 4 | Ehninger G et al., The pharmacokinetics and metabolism of…, Investigational new drugs (1985) | [10.1007/BF00174157](https://doi.org/10.1007/BF00174157) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Hu_1992_reference](drugs/drug_mitoxantrone/Mitoxantrone_Hu1992_reference.md) | — | 1-compartment (no model) | 4 | Hu OY et al., Pharmacokinetic and pharmacodynamic stu…, Cancer (1992) | [10.1002/1097-0142(19920215)69:4&lt;847::aid-cncr2820690402&gt;3.0.co;2-l](https://doi.org/10.1002/1097-0142(19920215)69:4&lt;847::aid-cncr2820690402&gt;3.0.co;2-l) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q354, Q61 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Lacayo_2002_control_arm](drugs/drug_mitoxantrone/Mitoxantrone_Lacayo2002_control_arm.md) | — | 1-compartment (no model) | 7 | Lacayo NJ et al., Pharmacokinetic interactions of cyclosp…, Leukemia (2002) | [10.1038/sj.leu.2402455](https://doi.org/10.1038/sj.leu.2402455) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Lacayo_2002_no_toxicity](drugs/drug_mitoxantrone/Mitoxantrone_Lacayo2002_no_toxicity.md) | — | 1-compartment (no model) | 2 | Lacayo NJ et al., Pharmacokinetic interactions of cyclosp…, Leukemia (2002) | [10.1038/sj.leu.2402455](https://doi.org/10.1038/sj.leu.2402455) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Lacayo_2002_p_value_a](drugs/drug_mitoxantrone/Mitoxantrone_Lacayo2002_p_value_a.md) | — | 1-compartment (no model) | 5 | Lacayo NJ et al., Pharmacokinetic interactions of cyclosp…, Leukemia (2002) | [10.1038/sj.leu.2402455](https://doi.org/10.1038/sj.leu.2402455) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Green_1988_reference](drugs/drug_mitoxantrone/Mitoxantrone_Green1988_reference.md) | — | 1-compartment (no model) | 0 | Green RM et al., Human central nervous system and plasma…, Journal of neuro-oncology (1988) | [10.1007/BF00163544](https://doi.org/10.1007/BF00163544) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Schleyer_1994_reference](drugs/drug_mitoxantrone/Mitoxantrone_Schleyer1994_reference.md) | — | general linear (no model) | 2 | Schleyer E et al., New aspects on the pharmacokinetics of…, Leukemia (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Xu_2024_reference](drugs/drug_mitoxantrone/Mitoxantrone_Xu2024_reference.md) | — | general linear (no model) | 4 | Xu G et al., Population pharmacokinetics of free and…, European journal of clinica… (2024) | [10.1007/s00228-024-03711-8](https://doi.org/10.1007/s00228-024-03711-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Altmann_2012_GFP](drugs/drug_mitoxantrone/pd_Altmann_2012_GFP.md) | green fluorescent protein (GFP) expression from recombinant CPXV (CPXV-GFP) ← mitoxantrone · inhibition effect | — | Altmann SE et al., Inhibition of cowpox virus and monkeypo…, Antiviral research (2012) | [10.1016/j.antiviral.2011.12.001](https://doi.org/10.1016/j.antiviral.2011.12.001) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Altmann_2012_GFP_2](drugs/drug_mitoxantrone/pd_Altmann_2012_GFP_2.md) | green fluorescent protein (GFP) expression from recombinant MPXV (MPXV-GFP) ← mitoxantrone · inhibition effect | — | Altmann SE et al., Inhibition of cowpox virus and monkeypo…, Antiviral research (2012) | [10.1016/j.antiviral.2011.12.001](https://doi.org/10.1016/j.antiviral.2011.12.001) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Di_2022_Hep_G2_cell_viability](drugs/drug_mitoxantrone/pd_Di_2022_Hep_G2_cell_viability.md) | Hep G2 cell viability ← mitoxantrone · inhibition effect | — | Di Micco S et al., In Silico Identification and In Vitro E…, International journal of mo… (2022) | [10.3390/ijms24010725](https://doi.org/10.3390/ijms24010725) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Di_2022_transfected_MCF7_cell_viability](drugs/drug_mitoxantrone/pd_Di_2022_transfected_MCF7_cell_viability.md) | transfected MCF7 cell viability ← mitoxantrone · inhibition effect | — | Di Micco S et al., In Silico Identification and In Vitro E…, International journal of mo… (2022) | [10.3390/ijms24010725](https://doi.org/10.3390/ijms24010725) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gao_2023_cell_viability](drugs/drug_mitoxantrone/pd_Gao_2023_cell_viability.md) | cell viability ← mitoxantrone · inhibition effect | — | Gao HL et al., The AKT inhibitor, MK-2206, attenuates…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1235285](https://doi.org/10.3389/fphar.2023.1235285) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pfeifer_2023_MTT](drugs/drug_mitoxantrone/pd_Pfeifer_2023_MTT.md) | cytotoxicity (cell viability measured by MTT assay) ← mitoxantrone · inhibition effect | — | Pfeifer V et al., Exostosin 1 Knockdown Induces Chemoresi…, International journal of mo… (2023) | [10.3390/ijms24065452](https://doi.org/10.3390/ijms24065452) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Megías-Vericat_2019_LPC](drugs/drug_mitoxantrone/pd_Meg_as_Vericat_2019_LPC.md) | live pathological cells (natural log of LPC) ← Mitoxantrone · direct sigmoid Emax (Hill) effect | model (no simulator) | Megías-Vericat JE et al., Differences in, Mediterranean journal of he… (2019) | [10.4084/MJHID.2019.016](https://doi.org/10.4084/MJHID.2019.016) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Megías-Vericat_2019_resp](drugs/drug_mitoxantrone/pd_Meg_as_Vericat_2019_resp.md) | synergy between cytarabine and mitoxantrone ← Mitoxantrone and cytarabine · model not identified | — | Megías-Vericat JE et al., Differences in, Mediterranean journal of he… (2019) | [10.4084/MJHID.2019.016](https://doi.org/10.4084/MJHID.2019.016) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mitoxantrone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2E1` inducer/substrate, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | skin | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (intercalation), TOP2A (inhibitor), TOP2B (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 52 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 10  ·  extracted 2  ·  needs_review 5  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ehninger_1985.pdf` | Ehninger G et al., The pharmacokinetics and metabolism of…, Investigational new drugs (1985) | popPK | 10 | [10.1007/BF00174157](https://doi.org/10.1007/BF00174157) | [4019115](https://pubmed.ncbi.nlm.nih.gov/4019115) | The study reports readable quantitative three-compartment pharmacokinetic parameters for mitoxantrone. |
| `Hu_1992.pdf` | Hu OY et al., Pharmacokinetic and pharmacodynamic stu…, Cancer (1992) | popPK | 10 | [10.1002/1097-0142(19920215)69:4&lt;847::aid-cncr2820690402&gt;3.0.co;2-l](https://doi.org/10.1002/1097-0142(19920215)69:4<847::aid-cncr2820690402>3.0.co;2-l) | [1735075](https://pubmed.ncbi.nlm.nih.gov/1735075) | Human study reports readable numeric mitoxantrone disposition parameters and a three-compartment model. |
| `Launay_1989.pdf` | Launay MC et al., Population pharmacokinetics of mitoxant…, Journal of pharmaceutical s… (1989) | popPK | 10 | [10.1002/jps.2600781020](https://doi.org/10.1002/jps.2600781020) | [2600798](https://pubmed.ncbi.nlm.nih.gov/2600798) | The human population-PK study reports numeric mitoxantrone clearance, terminal half-life, and total distribution volume. |
| `Schleyer_1994.pdf` | Schleyer E et al., New aspects on the pharmacokinetics of…, Leukemia (1994) | popPK | 10 | not captured | [8127148](https://pubmed.ncbi.nlm.nih.gov/8127148) | Human study reports a three-compartment model and numeric clearance, half-life, and AUC values. |
| `Xu_2024.pdf` | Xu G et al., Population pharmacokinetics of free and…, European journal of clinica… (2024) | popPK | 10 | [10.1007/s00228-024-03711-8](https://doi.org/10.1007/s00228-024-03711-8) | [38904799](https://pubmed.ncbi.nlm.nih.gov/38904799) | The human population-PK model reports numeric disposition parameters for liposome-encapsulated and free mitoxantrone. |
| `Green_1988.pdf` | Green RM et al., Human central nervous system and plasma…, Journal of neuro-oncology (1988) | popPK | 9 | [10.1007/BF00163544](https://doi.org/10.1007/BF00163544) | [3397768](https://pubmed.ncbi.nlm.nih.gov/3397768) | Human plasma pharmacokinetics are described by a three-compartment model with a reported numeric terminal half-life. |

<sub>queue written 2026-10-06T19:30:09.272284+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altmann_2012 | irrelevant | 0 | 0 | The study reports antiviral efficacy, not quantitative pharmacokinetic disposition parameters for mitoxantrone. |
| popPK | Di_2022 | irrelevant | 0 | 0 | Mitoxantrone is used in in-vitro cell assays, with no quantitative disposition or population-PK parameters reported. |
| popPK | Ehninger_1990 | irrelevant | 2 | 3 | This is a review that summarizes half-life ranges and a three-compartment model but provides no original quantitative model parameters. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | This in vitro cell-line study reports drug-sensitization IC50 changes, not mitoxantrone disposition parameters. |
| popPK | Gupta_2006 | irrelevant | 0 | 0 | In-vitro BCRP inhibition and resistance assays report no mitoxantrone disposition parameters. |
| popPK | He_2020 | irrelevant | 0 | 0 | Mitoxantrone is listed only as a multiple-sclerosis therapy; no pharmacokinetic parameters are reported. |
| popPK | LaCerte_2017 | irrelevant | 0 | 0 | The study models flavopiridol, while mitoxantrone is only co-administered and no mitoxantrone PK values are reported. |
| popPK | Megías-Vericat_2019 | irrelevant | 1 | 0 | This is an ex vivo pharmacodynamic sensitivity study, not a disposition-PK study; referenced Table 2 values are not provided. |
| popPK | Pfeifer_2023 | irrelevant | 0 | 0 | The numeric values are in-vitro cytotoxicity EC50s, not mitoxantrone disposition parameters. |
| popPK | Sorf_2018 | irrelevant | 0 | 0 | Mitoxantrone is only used in in-vitro resistance assays, with no mitoxantrone PK parameters reported. |
| popPK | Viglione_1993 | irrelevant | 0 | 0 | This is an in-vitro cardiac-effects study and reports no pharmacokinetic disposition parameters. |
| popPK | Wong_2021 | irrelevant | 0 | 0 | Mitoxantrone is only used as a cellular efflux substrate; no pharmacokinetic disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 19:31 UTC</sub>
