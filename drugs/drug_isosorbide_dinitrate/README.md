<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;isosorbide dinitrate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IsosorbideDinitrate_Jaruratanasirikul2020_reference&quot;,&quot;label&quot;:&quot;Jaruratanasirikul_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Jaruratanasirikul2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;IsosorbideDinitrate_Taylor1981_reference&quot;,&quot;label&quot;:&quot;Taylor_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1981_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# isosorbide dinitrate

- **generic name:** isosorbide dinitrate
- **ATC codes:** `C01DA08`, `C05AE02`
- **DrugBank:** [DB00883](https://go.drugbank.com/drugs/DB00883) · **PubChem:** [CID 6883](https://pubchem.ncbi.nlm.nih.gov/compound/6883)
- **molar mass:** 236.1363 g/mol (C6H8N2O8) — DrugBank
- **groups:** approved, investigational

## About

Isosorbide dinitrate is a nitrate vasodilator used for cardiac conditions such as angina, and also topically for haemorrhoids and anal fissures. It is an approved medicine and appears on the WHO list of essential medicines, so it remains in widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q179748](https://www.wikidata.org/wiki/Q179748) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| isosorbide 2-mononitrate | metabolite | 191.139 | C6H9NO6 | PubChem | [62989](https://pubchem.ncbi.nlm.nih.gov/compound/62989) | Straehl_1985 |
| isosorbide-5-mononitrate (isosorbide 5-mononitrate) | metabolite | 191.139 | C6H9NO6 | PubChem | [27661](https://pubchem.ncbi.nlm.nih.gov/compound/27661) | Sponer_1984, Straehl_1985, Taylor_1981 |
| isosorbide-dinitrate (isosorbide dinitrate, isosorbide_dinitrate) | metabolite | 236.136 | C6H8N2O8 | PubChem | [6883](https://pubchem.ncbi.nlm.nih.gov/compound/6883) | Sponer_1984, Straehl_1985, Taylor_1980, Taylor_1981 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:39 | 20:42 | 2/1/3 | 0/0/0 | 0/0/0 | 215,871/45,496 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 4/1 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Jaruratanasirikul_2020_reference](drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Jaruratanasirikul2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Jaruratanasirikul S et al., Pharmacokinetics and Monte Carlo Dosing…, European journal of drug me… (2020) | [10.1007/s13318-020-00643-3](https://doi.org/10.1007/s13318-020-00643-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.1). The first reading is what the record holds.">cross-check: disputed</span> | [Taylor_1981_reference](drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1981_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Taylor T et al., Isosorbide 5-mononitrate pharmacokineti…, Biopharmaceutics & drug dis… (1981) | [10.1002/bdd.2510020306](https://doi.org/10.1002/bdd.2510020306) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Sponer_1984_reference](drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Sponer1984_reference.md) | — | 1-compartment (no model) | 3 | Sponer G et al., Pharmacokinetic aspects of isosorbide-5…, The Journal of pharmacology… (1984) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.188). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Straehl_1985_reference](drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Straehl1985_reference.md) | — | general linear (no model) | 5 | Straehl P et al., Isosorbide dinitrate bioavailability, k…, Clinical pharmacology and t… (1985) | [10.1038/clpt.1985.150](https://doi.org/10.1038/clpt.1985.150) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Taylor_1980_reference](drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1980_reference.md) | — | 1-compartment (no model) | 2 | Taylor T et al., Pharmacokinetics of isosorbide dinitrat…, Biopharmaceutics & drug dis… (1980) | [10.1002/bdd.2510010310](https://doi.org/10.1002/bdd.2510010310) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">monkey</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Doyle_1981_reference](drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Doyle1981_reference.md) | — | 1-compartment (no model) | 0 | Doyle E et al., Pharmacokinetics of isosorbide dinitrat…, Journal of pharmaceutical s… (1981) | [10.1002/jps.2600701122](https://doi.org/10.1002/jps.2600701122) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=isosorbide_dinitrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2E1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NPR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 154 matched, 81 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 6  ·  extracted 2  ·  needs_review 3  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Doyle_1981.pdf` | Doyle E et al., Pharmacokinetics of isosorbide dinitrat…, Journal of pharmaceutical s… (1981) | popPK | 10 | [10.1002/jps.2600701122](https://doi.org/10.1002/jps.2600701122) | [7299675](https://pubmed.ncbi.nlm.nih.gov/7299675) | The study reports quantitative PK parameters (half-lives, plasma concentrations) for isosorbide dinitrate in non-human primates, though specific clearance and volume values are not explicitly listed in the text. |
| `Platzer_1982.pdf` | Platzer R et al., Pharmacokinetics of intravenous isosorb…, Journal of pharmacokinetics… (1982) | popPK | 10 | [10.1007/BF01062541](https://doi.org/10.1007/BF01062541) | [7182455](https://pubmed.ncbi.nlm.nih.gov/7182455) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, bioavailability) for isosorbide dinitrate in humans, with all values explicitly stated in the text. |
| `Straehl_1985.pdf` | Straehl P et al., Isosorbide dinitrate bioavailability, k…, Clinical pharmacology and t… (1985) | popPK | 10 | [10.1038/clpt.1985.150](https://doi.org/10.1038/clpt.1985.150) | [4017416](https://pubmed.ncbi.nlm.nih.gov/4017416) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-lives) for isosorbide dinitrate and its metabolites in humans. |
| `Taylor_1980.pdf` | Taylor T et al., Pharmacokinetics of isosorbide dinitrat…, Biopharmaceutics & drug dis… (1980) | popPK | 10 | [10.1002/bdd.2510010310](https://doi.org/10.1002/bdd.2510010310) | [7448342](https://pubmed.ncbi.nlm.nih.gov/7448342) | The study reports quantitative pharmacokinetic parameters including half-life, systemic clearance, and plasma concentrations for isosorbide dinitrate in humans. |
| `Taylor_1981.pdf` | Taylor T et al., Isosorbide 5-mononitrate pharmacokineti…, Biopharmaceutics & drug dis… (1981) | popPK | 9 | [10.1002/bdd.2510020306](https://doi.org/10.1002/bdd.2510020306) | [7295882](https://pubmed.ncbi.nlm.nih.gov/7295882) | The study reports quantitative PK parameters (CL, V, t1/2) for isosorbide 5-mononitrate, which is the primary active metabolite of isosorbide dinitrate, and explicitly discusses the pharmacokinetics of the parent dinitrate in the context of its metabolite formation. |
| `Assinder_1977.pdf` | Assinder DF et al., Plasma isosorbide dinitrate concentrati…, Journal of pharmaceutical s… (1977) | popPK | 8 | [10.1002/jps.2600660607](https://doi.org/10.1002/jps.2600660607) | [577507](https://pubmed.ncbi.nlm.nih.gov/577507) | The study reports quantitative PK parameters (half-life, peak concentrations, bioavailability) for isosorbide dinitrate in humans, though it lacks explicit clearance or volume values. |
| `Gladigau_1981.pdf` | Gladigau V et al., Plasma levels of isosorbide dinitrate a…, Arzneimittel-Forschung (1981) | popPK | 8 | not captured | [7196746](https://pubmed.ncbi.nlm.nih.gov/7196746) | The study reports pharmacokinetic modeling (one-compartment, zero-order input) for isosorbide dinitrate in humans, but specific numeric parameter values (CL, V, ka, t1/2) are not present in the provided evidence. |
| `Sponer_1984.pdf` | Sponer G et al., Pharmacokinetic aspects of isosorbide-5…, The Journal of pharmacology… (1984) | popPK | 8 | not captured | [6694105](https://pubmed.ncbi.nlm.nih.gov/6694105) | The study reports quantitative pharmacokinetic parameters (half-lives, bioavailability) for isosorbide-5-mononitrate, the primary active metabolite of isosorbide dinitrate, in dogs. |
| `Stehlík_1990.pdf` | Stehlík P et al., [Determination of isosorbide dinitrate…, Ceskoslovenska farmacie (1990) | popPK | 8 | not captured | [2379245](https://pubmed.ncbi.nlm.nih.gov/2379245) | The study reports pharmacokinetic parameters derived from a one-compartmental model for isosorbide dinitrate in humans, but the specific numeric values are not present in the provided text. |
| `Wallén_1993.pdf` | Wallén NH et al., Effects of an oral dose of isosorbide d…, British journal of clinical… (1993) | pd | 5 | [10.1111/j.1365-2125.1993.tb05680.x](https://doi.org/10.1111/j.1365-2125.1993.tb05680.x) | [8443032](https://www.ncbi.nlm.nih.gov/pubmed/8443032) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T10:25:59.099730+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abboud_1990 | irrelevant | 0 | 0 | The study uses isosorbide dinitrate as a hemodynamic load manipulation agent to assess left ventricular function, not to measure its pharmacokinetic parameters. |
| popPK | Bozinovski_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxation mechanisms and does not report pharmacokinetic parameters for isosorbide dinitrate. |
| popPK | Brynne_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of moxonidine, not the pharmacokinetics of isosorbide dinitrate. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacology and does not report any pharmacokinetic parameters for isosorbide dinitrate. |
| PGx | Frampton_1992 | not_relevant | 0 | 0 | The paper is a review of nicorandil's pharmacology and efficacy, mentioning isosorbide dinitrate only for comparative efficacy, and contains no pharmacogenomic data. |
| popPK | Gladigau_1981 | relevant | 8 | 0 | The study reports pharmacokinetic modeling (one-compartment, zero-order input) for isosorbide dinitrate in humans, but specific numeric parameter values (CL, V, ka, t1/2) are not present in the provided evidence. |
| popPK | Greenberg_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular relaxation and cGMP elevation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Henry_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of nitrate tolerance in isolated bovine coronary arteries, not a pharmacokinetic study reporting disposition parameters for isosorbide dinitrate. |
| popPK | Hu_2010 | irrelevant | 0 | 0 | The study investigates the effect of isosorbide dinitrate on coronary MR imaging quality (SNR, vessel diameter) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Ishibashi_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of nitrate bioactivation pathways (ALDH2 inhibition) in rabbits, reporting dose-response ratios and plasma nitrite changes rather than quantitative pharmacokinetic parameters (CL, V, ka) for isosorbide dinitrate. |
| PGx | Issa_2006 | not_relevant | 0 | 0 | The paper is a policy and clinical case study on the approval of BiDil based on race as a surrogate marker, and does not report specific pharmacogenomic effects on PK or PD parameters. |
| popPK | Jaruratanasirikul_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for meropenem, not isosorbide dinitrate. |
| popPK | Jaruratanasirikul_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for imipenem, not isosorbide dinitrate. |
| popPK | Jiao_2009 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sirolimus, not isosorbide dinitrate. |
| PGx | Kahn_2006 | not_relevant | 0 | 0 | The paper is a critical commentary on the marketing and race-specific approval of BiDil, not a study reporting pharmacogenomic effects on PK/PD parameters. |
| popPK | Kita_1994 | irrelevant | 0 | 0 | The study compares the antianginal efficacy of FK409 and isosorbide dinitrate in rat models but does not report pharmacokinetic parameters (CL, V, ka, etc.) for isosorbide dinitrate. |
| popPK | Koyuncu_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of nitrate tolerance in rabbit smooth muscle, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kreye_1983 | irrelevant | 0 | 0 | The study focuses on hemodynamic and vascular relaxant effects (pharmacodynamics) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | MacDonald_2009 | not_relevant | 0 | 0 | The paper investigates the chemopreventive effects of NO-aspirin 2 on carcinogen metabolism and only mentions isosorbide dinitrate as a comparative NO-donor, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | McNamara_2008 | not_relevant | 2 | 0 | The paper is a review that mentions racial differences in efficacy and a polymorphism affecting outcomes, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes for isosorbide dinitrate linked to a specific gene variant. |
| PGx | McNamara_2014 | not_relevant | 2 | 8 | The study reports a pharmacogenomic effect on clinical outcomes (composite score, QoL, survival) rather than a specific pharmacokinetic or pharmacodynamic parameter. |
| PGx | Minamiyama_1999 | not_relevant | 2 | 5 | The study investigates the role of CYP3A4 in nitric oxide formation but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Minamiyama_2002 | not_relevant | 0 | 0 | The study investigates the mechanism of nitrate tolerance via CYP450 degradation in rats, not the effect of a specific human gene variant or genotype on PK/PD parameters. |
| PGx | Minamiyama_2007 | not_relevant | 0 | 0 | The paper discusses the metabolic pathway of NO-aspirin and mentions isosorbide dinitrate only as background context, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Naeem_2026 | irrelevant | 0 | 0 | The paper is a review of Terminalia arjuna for ulcerative colitis and does not contain any pharmacokinetic data for isosorbide dinitrate. |
| popPK | Nahavandi_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aortic responsiveness to isosorbide dinitrate, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Otrompke_2007 | not_relevant | 0 | 0 | The text is a brief news summary of conference presentations and does not report specific pharmacogenomic effects or quantitative data for isosorbide dinitrate. |
| popPK | Sata_1997 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding isosorbide dinitrate pharmacokinetics. |
| popPK | Schneider_1988 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxation and tolerance mechanisms, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Schröder_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of guanylate cyclase activation (EC50 values) and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for isosorbide dinitrate. |
| popPK | Shabanova_2005 | irrelevant | 0 | 0 | The study investigates platelet receptor pharmacodynamics (ADP sensitivity) rather than the pharmacokinetic disposition parameters (CL, V, t1/2) of isosorbide dinitrate. |
| PGx | Sontoredjo_2013 | not_relevant | 2 | 0 | The text is a general review of ethnicity in pharmacogenetics that mentions isosorbide dinitrate only as a clinical example of ethnic prescribing differences, without reporting specific gene variants or quantitative PK/PD parameters. |
| popPK | Stehlík_1990 | relevant | 8 | 2 | The study reports pharmacokinetic parameters derived from a one-compartmental model for isosorbide dinitrate in humans, but the specific numeric values are not present in the provided text. |
| popPK | Stiefel_1984 | irrelevant | 1 | 0 | The study focuses on in vitro vasorelaxant effects and in vivo hemodynamic responses (hypotension) rather than quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Stout_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotransmitter release in rat hippocampal slices, not a pharmacokinetic study of isosorbide dinitrate. |
| popPK | Straehl_1984 | irrelevant | 2 | 8 | The study reports quantitative PK parameters for the metabolites (IS-5-MN and IS-2-MN) rather than the parent drug isosorbide dinitrate, which is only used as a comparator. |
| popPK | Tsou_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme kinetics and inactivation, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Vidrio_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasorelaxation in rat aorta, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Vincent_1992 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic tolerance (venodilation) and does not report quantitative pharmacokinetic parameters (CL, V, ka) for isosorbide dinitrate. |
| PGx | Vuppugalla_2004 | not_relevant | 0 | 0 | The study investigates the effect of nitric oxide donors on CYP450 activity in rat livers and does not report any pharmacogenomic effects (gene variants) on the PK or PD of isosorbide dinitrate. |
| popPK | Wallén_1993 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Wallén_1993 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Yang_1997 | irrelevant | 2 | 0 | The study reports pharmacokinetics for the metabolite isosorbide-5-mononitrate (5-ISMN) after 5-ISMN dosing, not isosorbide dinitrate (ISDN) dosing, and no numeric PK parameters are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 10:26 UTC</sub>
