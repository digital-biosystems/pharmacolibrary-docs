<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;phenazone, combinations excl. psycholeptics&quot;}]"></div>

# phenazone, combinations excl. psycholeptics

- **generic name:** phenazone, combinations excl. psycholeptics
- **ATC codes:** `N02BB51`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Phenazone combination products are analgesic and antipyretic medicines used to relieve pain and reduce fever. They are classified under the pyrazolone analgesics group and remain available in some countries, mainly in combination preparations rather than as a single-ingredient drug.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:03 | 1:44 | 0/1/0 | 0/0/0 | 0/0/0 | 105,965/7,346 | einfracz / qwen3.8-27b | 3 | 2/1 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fabre_1993_reference](drugs/drug_phenazone_combinations_excl_psycholeptics/PhenazoneCombinationsExclPsycholeptics_Fabre1993_reference.md) | — | 1-compartment (no model) | 0 | Fabre D et al., Identification of patients with impaire…, Clinical pharmacokinetics (1993) | [10.2165/00003088-199324040-00006](https://doi.org/10.2165/00003088-199324040-00006) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 86 matched, 59 returned
- **screened:** 8  ·  **relevant:** 7
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_21 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eichelbaum_1982.pdf` | Eichelbaum M et al., Pharmacokinetics and metabolism of anti…, Arzneimittel-Forschung (1982) | popPK | 10 | not captured | [7201837](https://pubmed.ncbi.nlm.nih.gov/7201837) | Study reports quantitative PK for phenazone in humans including half-life and bioavailability, but specific compartmental parameters (CL, V) are not explicitly listed in the text provided. |
| `Fabre_1993.pdf` | Fabre D et al., Identification of patients with impaire…, Clinical pharmacokinetics (1993) | popPK | 10 | [10.2165/00003088-199324040-00006](https://doi.org/10.2165/00003088-199324040-00006) | [8491059](https://pubmed.ncbi.nlm.nih.gov/8491059) | The paper reports a population PK study for phenazone (antipyrine) with specific quantitative values for clearance precision (0.155 L/h), interindividual SD (0.765 L/h), and mean error (0.0477 L/h) explicitly in the text. |
| `Homeida_1986.pdf` | Homeida MM et al., Assessment of oxidative metabolism in a…, Gut (1986) | popPK | 10 | [10.1136/gut.27.4.382](https://doi.org/10.1136/gut.27.4.382) | [3007307](https://pubmed.ncbi.nlm.nih.gov/3007307) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for phenazone (antipyrine) in human subjects. |
| `Janus_1992.pdf` | Janus K, Effect of short-term starvation and wat…, Archivum veterinarium Polon… (1992) | popPK | 10 | not captured | [1339567](https://pubmed.ncbi.nlm.nih.gov/1339567) | The study reports quantitative pharmacokinetic parameters (Vd, half-life, clearance) for phenazone in calves, but the specific numeric values are not present in the provided evidence. |
| `Metwally_1990.pdf` | Metwally AA et al., Effect of schistosomiasis infection on…, Arzneimittel-Forschung (1990) | popPK | 10 | not captured | [2110459](https://pubmed.ncbi.nlm.nih.gov/2110459) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, elimination half-life) for phenazone in mice, with specific numeric values for half-life provided in the abstract. |
| `Wiela_1988.pdf` | Wiela A et al., Phenazone pharmacokinetics as an index…, International journal of cl… (1988) | popPK | 10 | not captured | [3243660](https://pubmed.ncbi.nlm.nih.gov/3243660) | The study reports quantitative pharmacokinetic parameters (half-life, elimination rate constant, metabolic clearance) for phenazone in humans. |
| `Doyle_1981.pdf` | Doyle E et al., Comparative pharmacokinetics of antipyr…, Toxicology (1981) | popPK | 9 | [10.1016/0300-483x(81)90097-4](https://doi.org/10.1016/0300-483x(81)90097-4) | [7268788](https://pubmed.ncbi.nlm.nih.gov/7268788) | The study reports quantitative pharmacokinetic parameters (Vd, t1/2) for phenazone in non-human primates, but the specific numeric values for clearance (CL) are not explicitly listed in the provided text. |
| `Kwiatkowski_1991.pdf` | Kwiatkowski A, [Effect of estrogens on pharmacokinetic…, Annales Academiae Medicae S… (1991) | popPK | 9 | not captured | [1816754](https://pubmed.ncbi.nlm.nih.gov/1816754) | The study is a pharmacokinetic investigation of phenazone in rabbits reporting qualitative changes in clearance and half-life, but specific numeric values are not explicitly listed in the provided text. |
| `Sotaniemi_1997.pdf` | Sotaniemi EA et al., Age and cytochrome P450-linked drug met…, Clinical pharmacology and t… (1997) | popPK | 9 | [10.1016/S0009-9236(97)90166-1](https://doi.org/10.1016/S0009-9236(97)90166-1) | [9091249](https://pubmed.ncbi.nlm.nih.gov/9091249) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, volume of distribution) for phenazone (antipyrine) in human subjects across different age groups. |
| `Wójcicki_1996.pdf` | Wójcicki J et al., Pharmacokinetics of phenazone (antipyri…, British journal of pharmaco… (1996) | popPK | 9 | [10.1111/j.1476-5381.1996.tb15146.x](https://doi.org/10.1111/j.1476-5381.1996.tb15146.x) | [8825335](https://pubmed.ncbi.nlm.nih.gov/8825335) | The study reports the pharmacokinetics of phenazone in rabbits with cholestasis, but the specific numeric parameter values are not present in the provided evidence. |
| `Elfström_1978.pdf` | Elfström J et al., Influence of bed rest on the pharmacoki…, European journal of clinica… (1978) | popPK | 8 | [10.1007/BF00644612](https://doi.org/10.1007/BF00644612) | [668797](https://pubmed.ncbi.nlm.nih.gov/668797) | The study investigates the pharmacokinetics of phenazone in humans and reports qualitative findings on parameters like clearance and volume, but the extracted evidence lacks specific numeric values. |
| `Groen_1993.pdf` | Groen K et al., The relationship between phenazone (ant…, Clinical pharmacokinetics (1993) | popPK | 8 | [10.2165/00003088-199325020-00006](https://doi.org/10.2165/00003088-199325020-00006) | [8403737](https://pubmed.ncbi.nlm.nih.gov/8403737) | The study reports PK parameters for phenazone but the evidence provided only contains qualitative statements (e.g., 50% decrease) and percentages, lacking specific quantitative values for CL, V, or Ka. |
| `Hartleb_1989.pdf` | Hartleb M et al., [Usefulness of the evaluation of blood…, Polskie Archiwum Medycyny W… (1989) | popPK | 8 | not captured | [2634249](https://pubmed.ncbi.nlm.nih.gov/2634249) | The study investigates the pharmacokinetics of phenazone in humans and discusses its clearance, but no specific numeric parameter values are provided in the extracted evidence. |
| `Orszulak-Michalak_1987.pdf` | Orszulak-Michalak D et al., The influence of propranolol and glucag…, Die Pharmazie (1987) | popPK | 8 | not captured | [3671460](https://pubmed.ncbi.nlm.nih.gov/3671460) | The study investigates the PK of phenazone in rabbits, but specific numeric parameter values are not provided in the extracted text. |
| `Wiela-Hojenska_1999.pdf` | Wiela-Hojenska A et al., Phenazone as a marker of liver-metaboli…, International journal of cl… (1999) | popPK | 8 | not captured | [10363621](https://pubmed.ncbi.nlm.nih.gov/10363621) | The study reports quantitative phenazone pharmacokinetic parameters (half-life and clearance) in humans, though it is a probe drug study for liver function rather than a full population PK model. |
| `Scavone_1989.pdf` | Scavone JM et al., Lack of effect of influenza vaccine on…, Clinical pharmacokinetics (1989) | popPK | 7 | [10.2165/00003088-198916030-00004](https://doi.org/10.2165/00003088-198916030-00004) | [2721087](https://pubmed.ncbi.nlm.nih.gov/2721087) | The paper is a primary PK study involving phenazone (antipyrine) in humans, but the extracted evidence provides only qualitative statistical comparisons of changes in clearance and half-life, lacking the absolute baseline numeric parameter values (e.g., specific CL or t1/2 in hours/L/h). |
| `Wójcicki_1990.pdf` | Wójcicki J et al., [Pharmacokinetics of phenazone in patie…, Polski tygodnik lekarski (W… (1990) | popPK | 7 | not captured | [2216952](https://pubmed.ncbi.nlm.nih.gov/2216952) | The paper reports qualitative changes in phenazone PK parameters (kel, Clt, AUC) in humans, but the specific numeric values are not present in the provided evidence. |
| `Butler_2008.pdf` | Butler JM et al., Free drug metabolic clearance in elderl…, Clinical pharmacokinetics (2008) | popPK | 5 | [10.2165/00003088-200847050-00002](https://doi.org/10.2165/00003088-200847050-00002) | [18399712](https://pubmed.ncbi.nlm.nih.gov/18399712) | This is a review paper that cites quantitative clearance reduction ranges (20-52%) for phenazone in the elderly, but it is a secondary source rather than an original primary PK study. |
| `Gawrońska-Szklarz_1992.pdf` | Gawrońska-Szklarz B et al., [Pharmacokinetics of phenazone after bi…, Ginekologia polska (1992) | popPK | 5 | not captured | [1305588](https://pubmed.ncbi.nlm.nih.gov/1305588) | The study reports phenazone pharmacokinetics in rabbits using a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence text. |
| `Gawrońska-Szklarz_1996.pdf` | Gawrońska-Szklarz B et al., [Effect of mestranol on pharmacokinetic…, Ginekologia polska (1996) | popPK | 5 | not captured | [8655012](https://pubmed.ncbi.nlm.nih.gov/8655012) | The study reports on the pharmacokinetics of phenazone in rabbits, but the provided evidence contains no specific numeric parameter values. |
| `Gwilt_1991.pdf` | Gwilt PR et al., The effects of diabetes mellitus on pha…, Clinical pharmacokinetics (1991) | popPK | 5 | [10.2165/00003088-199120060-00004](https://doi.org/10.2165/00003088-199120060-00004) | [2044331](https://pubmed.ncbi.nlm.nih.gov/2044331) | This is a review article that qualitatively states the volume of distribution of phenazone is reduced by 20% in diabetic patients, but it does not provide specific quantitative PK parameter values (like clearance or absolute volume). |

<sub>queue written 2026-10-07T07:03:04.198835+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aarbakke_1978 | irrelevant | 0 | 0 | The paper discusses phenylbutazone, not phenazone (azapropazone), so it is the wrong drug. |
| popPK | Aaron_2018 | irrelevant | 0 | 0 | The paper is a clinical review of ear drops for wax removal where phenazone is used as a topical treatment, not a pharmacokinetic study of its disposition parameters. |
| popPK | Andreasen_1978 | irrelevant | 0 | 0 | The paper is a review discussing phenazone as a probe drug, and the specific numeric parameter values are located in a figure not provided in the text. |
| popPK | Baggot_1992 | irrelevant | 1 | 0 | The paper is a general review of veterinary pharmacokinetics principles and does not report quantitative disposition parameters (CL, V, etc.) for phenazone. |
| popPK | Blanchard_2006 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation using hepatocytes to predict clearance, not a population pharmacokinetic study of the subject drug, and no in-vivo PK parameters for the specific combination are reported. |
| popPK | Bolanowski_1990 | irrelevant | 0 | 0 | The study discusses phenazone elimination patterns (fast/slow) rather than quantitative disposition parameters like clearance, volume, or rate constants. |
| popPK | Brosen_1990 | irrelevant | 0 | 0 | This is a review article on CYP2D6 polymorphisms that mentions phenazone only as an inducer, providing no pharmacokinetic parameters for phenazone. |
| popPK | Butler_2008 | relevant | 5 | 4 | This is a review paper that cites quantitative clearance reduction ranges (20-52%) for phenazone in the elderly, but it is a secondary source rather than an original primary PK study. |
| popPK | Davies_2000 | irrelevant | 0 | 0 | The paper is a general review of NSAID pharmacokinetics and does not report specific quantitative disposition parameters for phenazone. |
| popPK | Delbarre_1976 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ketoprofen, not phenazone (azapropazone). |
| popPK | Desager_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ticlopidine, and phenazone (antipyrine) is only mentioned as a probe drug for interaction studies, not as the subject of PK parameter modeling. |
| popPK | Dollery_1979 | irrelevant | 3 | 0 | The paper reports qualitative findings on metabolic clearance variability (diet, alcohol, etc.) but does not provide quantitative PK parameter values (CL, V, etc.) in the provided evidence. |
| popPK | Døssing_1985 | irrelevant | 0 | 0 | This is a review article discussing the effects of exercise on drug metabolism and does not report original quantitative pharmacokinetic parameters for phenazone. |
| popPK | Eichelbaum_1982 | relevant | 10 | 4 | Study reports quantitative PK for phenazone in humans including half-life and bioavailability, but specific compartmental parameters (CL, V) are not explicitly listed in the text provided. |
| popPK | Elfström_1978 | relevant | 8 | 1 | The study investigates the pharmacokinetics of phenazone in humans and reports qualitative findings on parameters like clearance and volume, but the extracted evidence lacks specific numeric values. |
| popPK | Fenner_1973 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| popPK | Gawrońska-Szklarz_1992 | irrelevant | 5 | 0 | The study reports phenazone pharmacokinetics in rabbits using a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence text. |
| popPK | Gawrońska-Szklarz_1996 | relevant | 5 | 0 | The study reports on the pharmacokinetics of phenazone in rabbits, but the provided evidence contains no specific numeric parameter values. |
| popPK | Geaney_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of phenytoin in the presence of azapropazone; phenazone is not the subject drug. |
| popPK | Groen_1993 | relevant | 8 | 1 | The study reports PK parameters for phenazone but the evidence provided only contains qualitative statements (e.g., 50% decrease) and percentages, lacking specific quantitative values for CL, V, or Ka. |
| popPK | Gwilt_1991 | relevant | 5 | 1 | This is a review article that qualitatively states the volume of distribution of phenazone is reduced by 20% in diabetic patients, but it does not provide specific quantitative PK parameter values (like clearance or absolute volume). |
| popPK | Hartleb_1989 | relevant | 8 | 0 | The study investigates the pharmacokinetics of phenazone in humans and discusses its clearance, but no specific numeric parameter values are provided in the extracted evidence. |
| popPK | Houghton_1984 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ketoprofen, not phenazone. |
| popPK | Houghton_1984_2 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of ketoprofen, not phenazone. |
| popPK | Hubskyĭ_2014 | irrelevant | 0 | 0 | The study investigates biophysical parameters of erythrocyte membranes and drug binding in rats, not quantitative pharmacokinetic parameters (CL, V, etc.) for phenazone. |
| popPK | Hvidberg_1975 | irrelevant | 0 | 0 | The study investigates phenylbutazone and oxyphenbutazone, not phenazone. |
| popPK | Ivanko_1991 | irrelevant | 3 | 0 | The paper describes a pharmacokinetic study of phenazone in children but the provided evidence contains no quantitative numerical parameter values (such as clearance, half-life, or volume). |
| popPK | Janus_1992 | relevant | 10 | 2 | The study reports quantitative pharmacokinetic parameters (Vd, half-life, clearance) for phenazone in calves, but the specific numeric values are not present in the provided evidence. |
| popPK | Jeffcott_1977 | irrelevant | 0 | 0 | The paper is a review of phenylbutazone (a different drug) in horses and does not report quantitative PK parameters for phenazone. |
| popPK | Johnson_1991 | irrelevant | 0 | 0 | The paper is a review of NSAID therapy in the elderly and does not report quantitative pharmacokinetic parameters for phenazone. |
| popPK | Jones_1976 | irrelevant | 0 | 0 | The paper reviews azapropazone, which is a different drug, not phenazone. |
| popPK | Kelly_1992 | irrelevant | 0 | 0 | The paper is a review of calcium antagonists and only mentions phenazone as a probe drug for metabolic interactions, without providing any quantitative pharmacokinetic parameters for phenazone itself. |
| popPK | Klinger_1969 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| popPK | Kwiatkowski_1991 | relevant | 9 | 2 | The study is a pharmacokinetic investigation of phenazone in rabbits reporting qualitative changes in clearance and half-life, but specific numeric values are not explicitly listed in the provided text. |
| popPK | Landes_1995 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of lansoprazole; phenazone is mentioned only as a drug in interaction studies, not as the subject of PK parameter estimation. |
| popPK | Meredith_1977 | irrelevant | 4 | 0 | The study is relevant as a PK study of phenazone in humans reporting half-life and clearance changes, but specific numeric parameter values are not present in the provided evidence. |
| popPK | Mo_2025 | irrelevant | 0 | 0 | The paper is a clinical case report on Mycoplasma pneumoniae-induced rash and mucositis and does not contain any pharmacokinetic data for phenazone. |
| popPK | Montenegro-Alvarez_2006 | relevant | 4 | 1 | The study is a preclinical pharmacokinetic study in rats using phenazone (antipyrine) to evaluate hepatic function, but the specific quantitative values (CL, V, t1/2) are reported only as statistically significant changes compared to controls without providing the actual numeric parameters. |
| popPK | Orszulak-Michalak_1987 | relevant | 8 | 2 | The study investigates the PK of phenazone in rabbits, but specific numeric parameter values are not provided in the extracted text. |
| popPK | Orzechowska-Juzwenko_1981 | irrelevant | 0 | 0 | no_text gate: only 57 chars of text extracted (&lt; 400) |
| popPK | Orzechowska-Juzwenko_1983 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Orzechowska-Juzwenko_1984 | irrelevant | 2 | 0 | The study reports a significant difference in phenazone elimination (pharmacokinetics) in rabbits but the evidence provided contains no quantitative parameter values (CL, V, t1/2, etc.). |
| popPK | Pallapies_1994 | irrelevant | 0 | 0 | The study investigates azapropazone and ketorolac, not phenazone, which is the target drug. |
| popPK | Periti_1992 | irrelevant | 0 | 0 | The paper is a review of macrolide interactions where phenazone is only mentioned as an example of a drug whose metabolism is inhibited, with no original PK parameters provided. |
| popPK | Perucca_1982 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions involving antiepileptic drugs and does not report quantitative PK parameters for phenazone. |
| popPK | Perucca_1994 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of fluvoxamine, and phenazone is only mentioned as a drug subject to interaction/inhibition, not as the subject of PK modeling or quantification. |
| popPK | Ritch_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of azapropazone, not phenazone (aminopyrine) or its combinations. |
| popPK | Sallustio_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketoprofen, not phenazone. |
| popPK | Scavone_1989 | relevant | 7 | 2 | The paper is a primary PK study involving phenazone (antipyrine) in humans, but the extracted evidence provides only qualitative statistical comparisons of changes in clearance and half-life, lacking the absolute baseline numeric parameter values (e.g., specific CL or t1/2 in hours/L/h). |
| popPK | Skillman_1981 | irrelevant | 0 | 0 | The paper is a review of sulfonylurea pharmacology and does not report quantitative pharmacokinetic parameters for phenazone. |
| popPK | Skretkowicz_1995 | irrelevant | 1 | 0 | The study measures pharmacokinetic parameters for phenazone in rats, not for phenazone combinations. |
| popPK | St_1991 | irrelevant | 2 | 0 | The paper is a review that tabulates reported clearances but does not present original quantitative PK parameters or a population model for phenazone in the provided evidence. |
| popPK | Taburet_1990 | irrelevant | 1 | 0 | The paper is a review that mentions phenazone only as an example with conflicting in vivo data, without reporting specific quantitative PK parameters. |
| popPK | Thomas_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics (uricosuric effect) of azapropazone and does not report pharmacokinetic parameters for phenazone. |
| popPK | Upton_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketoprofen, not phenazone. |
| popPK | Venkataramanan_1989 | irrelevant | 0 | 0 | The paper is a review discussing phenazone (antipyrine) only as a probe drug for metabolic function in transplant patients and does not report specific quantitative PK parameters for phenazone. |
| popPK | Verbeeck_1990 | irrelevant | 0 | 0 | The paper is a general review of NSAID pharmacokinetic interactions and does not report specific quantitative PK parameters for phenazone. |
| popPK | Walter-Sack_1996 | irrelevant | 2 | 0 | The paper is a review discussing general effects of diet on drug metabolism, using phenazone only as a representative example without reporting original quantitative PK parameter values. |
| popPK | Wildgrube_1986 | irrelevant | 0 | 0 | The study uses phenazone as a diagnostic probe to estimate liver function, while the primary pharmacokinetic analysis focuses on molsidomine and its metabolite. |
| popPK | Wilimowski_1988 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| popPK | Wójcicki_1990 | relevant | 7 | 0 | The paper reports qualitative changes in phenazone PK parameters (kel, Clt, AUC) in humans, but the specific numeric values are not present in the provided evidence. |
| popPK | Wójcicki_1996 | relevant | 9 | 0 | The study reports the pharmacokinetics of phenazone in rabbits with cholestasis, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Zaghloul_2024 | irrelevant | 0 | 0 | The study investigates phenylbutazone, not phenazone, which is the target drug for this extraction task. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:03 UTC</sub>
